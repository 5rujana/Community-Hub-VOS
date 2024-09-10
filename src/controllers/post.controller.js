import mongoose, {isValidObjectId} from "mongoose"
import {Post} from "../models/post.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {UploadOnCloudinary} from "../utils/cloudinary.service.js"


const getAllPosts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    const posts = await Post.aggregatePaginate(query, {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { [sortBy]: sortType }, 
        userId: isValidObjectId(userId) ? userId : null,
        customLabels: {
            docs: "posts"
        }
    })
             

    if(!posts){
        return next(new ApiError(400,"No posts found"))
    }

    res
    .status(200)
    .json(new ApiResponse(200,{posts:posts},"Posts are fetched successfully"))
})

const publishAPost = asyncHandler(async (req, res) => {  
           
    const {caption} = req.body
    if([caption].some((field)=>field.trim()==="")){
        throw new ApiError(400,"Caption is required")
    }
    const postLocalPath = req.files?.postFile[0].path
    let thumbnailLocalPath
    if(req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length>0){
        thumbnailLocalPath = req.files.thumbnail[0].path
    }
    if(!postLocalPath){
        throw new ApiError(400,"Post file is required")
    }

    const postfile = await UploadOnCloudinary(postLocalPath)
    if(!postfile){
        throw new ApiError(500,"There was an error uploading post")
    }

    const thumbnail = postLocalPath ? await UploadOnCloudinary(thumbnailLocalPath) : null  

    const post = await Post.create({
        postFile:postfile.url,
        thumbnail:thumbnail?.url || "",
        caption,
        owner:req.user._id,
        postType:thumbnail?"video":"image",
        postDuration:thumbnail?req.body.postDuration:null //?
    })
    res
    .status(201)
    .json(new ApiResponse(201,{post},"Video is published successfully"))
})

const getPostById = asyncHandler(async (req, res) => {
    const { postId } = req.params
    if(!isValidObjectId(postId)){
        throw new ApiError(400,"Invalid post id")
    }
    const post = await Post.findById(postId)
    if(!post){
        throw new ApiError(404,"Post not found")
    }
    res
    .status(200)
    .json(new ApiResponse(200,{post},"Post is fetched successfully"))
})

const updatePost = asyncHandler(async (req, res) => {
    const { postId } = req.params
    if (!isValidObjectId(postId)) {
        throw new ApiError(400, "Invalid post id")
    }
    const post = await Post.findById(postId)
    if (!post) {
        throw new ApiError(404, "Post not found")
    }

    let thumbnailLocalPath
    if (req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length > 0) {
        thumbnailLocalPath = req.files.thumbnail[0].path
    }

    const { caption } = req.body
    if ([caption].some((field) => field.trim() === "")) {
        throw new ApiError(400, "Caption is required")
    }

    console.log("Thumbnail local path:", thumbnailLocalPath)
    let thumbnail = null
    if (thumbnailLocalPath) {
        thumbnail = await UploadOnCloudinary(thumbnailLocalPath)
        if (!thumbnail) {
            throw new ApiError(500, "There was an error uploading thumbnail")
        }
    }

    await Post.findByIdAndUpdate(postId,
        {
            $set: {
                caption,
                thumbnail: thumbnail?.url || post.thumbnail
            }
        },
        { new: true }
    )

    res
        .status(200)
        .json(new ApiResponse(200, {}, "Post details are updated successfully"))
})

const deletePost = asyncHandler(async (req, res) => {
    const { postId } = req.params
    if(!isValidObjectId(postId)){
        throw new ApiError(400,"Invalid post id")
    }

    const post = await Post.findById(postId)
    if(!video){
        throw new ApiError(404,"Post not found")
    }

    await Post.findByIdAndDelete(postId)
    
    res
    .status(200)
    .json(new ApiResponse(200,{},"Post is deleted successfully"))  
})

export {
    getAllPosts,
    publishAPost,
    getPostById,
    updatePost,
    deletePost,
}
