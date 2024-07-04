import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getPostComments = asyncHandler(async (req, res) => {
    const {postId} = req.params
    const {page = 1, limit = 10} = req.query
    if(!isValidObjectId(postId)){
        throw new ApiError(400,"Invalid post id")
    }
    const comments = await Comment.aggregatePaginate(
        {post:postId},
        {
            page:parseInt(page),
            limit:parseInt(limit),
            sort:{createdAt:"desc"},
            customLabels:{
                docs:"comments"
            }
        }
    )

    res
    .status(200)
    .json(new ApiResponse(200,{comments},"Comments are fetched successfully"))


})

const addComment = asyncHandler(async (req, res) => {
    const {postId} = req.params
    const {content} = req.body
    if(!isValidObjectId(postId)){
        throw new ApiError(400,"Invalid post id")
    }
    if(!content.trim()){
        throw new ApiError(400,"Comment text is required")
    }
    const comment = await Comment.create({
        content,
        post:postId,
        owner:req.user._id
    })

    res
    .status(201)
    .json(new ApiResponse(201,{comment},"Comment is created successfully"))
})

const updateComment = asyncHandler(async (req, res) => {
    const {commentId} = req.params

    if(!isValidObjectId(commentId)){
        throw new ApiError(400,"Invalid comment id")
    }
    const {content} = req.body
    if(!content.trim()){
        throw new ApiError(400,"Comment text is required")
    }
    const comment = await Comment.findByIdAndUpdate(
        commentId,
        {
            content
        },
        {new:true}
    
    )
    
    res
    .status(200)
    .json(new ApiResponse(200,{},"Comment is updated successfully"))
})

const deleteComment = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    if(!isValidObjectId(commentId)){
        throw new ApiError(400,"Invalid comment id")
    }
    await Comment.findByIdAndDelete(commentId)
    res
    .status(200)
    .json(new ApiResponse(200,{},"Comment is deleted successfully"))
})

export {
    getPostComments, 
    addComment, 
    updateComment,
    deleteComment
}
