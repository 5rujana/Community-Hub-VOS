import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {Comment} from "../models/comment.model.js"
import { Post } from "../models/post.model.js"
import { Thread } from "../models/thread.model.js"

const togglePostLike = asyncHandler(async (req, res) => {
    const {postId} = req.params
    if (!isValidObjectId(postId)) {
        throw new ApiError(400, "Invalid post id");
    }

    const post = await Post.findById(postId);
    if (!post) {
        throw new ApiError(404, "Post not found");
    }

    const existingLike = await Like.findOne({ post: postId, likedBy: req.user._id });

    if (existingLike) {
        await Like.deleteOne({ post: postId, likedBy: req.user._id });
    } else {
        
        await Like.create({ post: postId, likedBy: req.user._id });
    }


    const hasUserLiked = existingLike ? false : true;
    const totalLikes = await Like.countDocuments({ post: postId });


    res
    .status(200)
    .json(new ApiResponse(200, { totalLikes, hasUserLiked }, "Post like is toggled successfully"));
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    if(!isValidObjectId(commentId)){
        throw new ApiError(400,"Invalid comment id")
    }

    const comment = await Comment.findById(commentId)
    if(!comment){
        throw new ApiError(404,"Comment not found")
    }
    const existingLike = await Like.findOne({comment:commentId,likedBy:req.user._id})
    if (existingLike) {
        await   Like.deleteOne({ comment:commentId, likedBy: req.user._id })
    }
    else {
        await Like.updateOne({ comment:commentId, likedBy: req.user._id });
    }
    const hasUserLiked = existingLike ? false : true;
    const totalLikes = await Like.countDocuments({ comment: commentId });
    
    res
    .status(200)
    .json(new ApiResponse(200, { totalLikes, hasUserLiked }, "Comment like is toggled successfully"));

})

const toggleThreadLike = asyncHandler(async (req, res) => {
    const {threadId} = req.params
    if(!isValidObjectId(threadId)){
        throw new ApiError(400,"Invalid thread id")
    }

    const thread = await Thread.findById(threadId)
    if(!thread){
        throw new ApiError(404,"Thread not found")
    }
    const existingLike = await Like.findOne({thread:threadId,likedBy:req.user._id})
    if (existingLike) {
        await Like.deleteOne({thread:threadId, likedBy: req.user._id })
    }
    else {
        await Like.updateOne({thread:threadId, likedBy: req.user._id });
    }

    const hasUserLiked = existingLike ? false : true;
    const totalLikes = await Like.countDocuments({thread:threadId});
    
    res
    .status(200)
    .json(new ApiResponse(200,{totalLikes,hasUserLiked},"Thread like is toggled successfully"))

})

const getLikedPosts = asyncHandler(async (req, res) => {
    const likedposts = await Like.find({likedBy:req.user._id,post:{$exists:true}}).populate('post');
    res
    .status(200)
    .json(new ApiResponse(200,{likedposts},"Liked posts are fetched successfully"))
})

export {
    togglePostLike,
    toggleCommentLike,
    toggleThreadLike,
    getLikedPosts
}