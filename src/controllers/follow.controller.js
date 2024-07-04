import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Follow } from "../models/follow.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleFollow = asyncHandler(async (req, res) => {
    const {accountId} = req.params
    if(!isValidObjectId(accountId)){
        throw new ApiError(400,"Invalid account id")
    }
    const account = await User.findById(accountId)
    if(!account){
        throw new ApiError(404,"Account not found")
    }
    const existingFollowing = await Follow.findOne({account:accountId,follower:req.user._id})
    if(existingFollowing){
        await Follow.deleteOne({account:accountId,follower:req.user._id})
    }
    else{
        await Follow.create({account:accountId,follower:req.user._id})
    }
    const follower = await User.findById(req.user._id)
    const isfollowing = existingFollowing ? false : true
    const totalFollowers = await Follow.countDocuments({account:accountId})

    res
    .status(200)
    .json(new ApiResponse(200,{totalFollowers,isfollowing,follower},"Follow status is toggled successfully"))
})

const getUserAccountFollowers = asyncHandler(async (req, res) => {
    const {accountId} = req.params
    if(!isValidObjectId(accountId)){
        throw new ApiError(400,"Invalid account id")
    }
    const account = await User.findById(accountId)
    if(!account){
        throw new ApiError(404,"Account not found")
    }
    const followers = await Follow.find({account:accountId})

    res
    .status(200)
    .json(new ApiResponse(200,{followers},"Followers are fetched successfully"))
})

const getFollowingAccounts = asyncHandler(async (req, res) => {
    const { followerId } = req.params
    if(!isValidObjectId(followerId)){
        throw new ApiError(400,"Invalid follower id")
    }
    const user = await User.findById(followerId)
    if(!user){
        throw new ApiError(404,"User not found")
    }
    const FollowingAccounts = await Follow.find({follower:followerId})
    res
    .status(200)
    .json(new ApiResponse(200,{FollowingAccounts},"Following Accounts are fetched successfully"))
})

export {
    toggleFollow,
    getUserAccountFollowers,
    getFollowingAccounts
}