import { isValidObjectId } from "mongoose"
import {Thread} from "../models/thread.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createThread = asyncHandler(async (req, res) => {
    const {content} = req.body
    if(!content){
        throw new ApiError(400,"Content is required")
    }
    if(!isValidObjectId(req.user._id)){
        throw new ApiError(400,"Invalid user id")
    }
    
    const user = await User.findById(req.user._id)
    if(!user){
        throw new ApiError(404,"User not found")
    }

    const thread = await Thread.create({
        content,
        owner:req.user._id

    })

    res
    .status(200)
    .json(new ApiResponse(200,{thread},"Thread is created successfully"))
})

const getUserThreads = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    if(!isValidObjectId(userId)){
        throw new ApiError(400,"Invalid user id")
    }
    const threads = await Thread.find({owner:userId})
    res
    .status(200)
    .json(new ApiResponse(200,{threads},"Threads are fetched successfully"))
})

const updateThread = asyncHandler(async (req, res) => {
    const {threadId} = req.params
    if(!threadId){
        throw new ApiError(400,"Thread id is required")
    }

    if(!isValidObjectId(threadId)){
        throw new ApiError(400,"Invalid thread id")
    }

    const {content} = req.body

    await Thread.findByIdAndUpdate(threadId,
        {
            $set:{
                content
            }
        },
        {
            new:true
        }
    )

    res
    .status(200)
    .json( new ApiResponse(200,{},"Thread updated successfully"))
})

const deleteThread = asyncHandler(async (req, res) => {
    const {threadId} = req.params
    if(!threadId){
        throw new ApiError(400,"Thread id is required")
    }
    if(!isValidObjectId(threadId)){
        throw new ApiError(400,"Invalid thread id")
    }

    await Thread.findByIdAndDelete(threadId)
    res
    .status(200)
    .json(new ApiResponse(200,{},"Thread deleted successfully"))
})

export {
    createThread,
    getUserThreads,
    updateThread,
    deleteThread,
}
