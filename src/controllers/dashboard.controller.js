import mongoose from "mongoose"
import {Post} from "../models/post.model.js"
import { Follow } from "../models/follow.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getAccountStats = asyncHandler(async (req, res) => {
    // TODO: Get the account stats
})

const getAccountPosts = asyncHandler(async (req, res) => {
    const {accountId} = req.params
    const {page = 1, limit = 10} = req.query
    if(!mongoose.isValidObjectId(accountId)){
        throw new ApiError(400,"Invalid account id")
    }
    const posts = await Post.aggregatePaginate(
        {account:accountId},
        {
            page:parseInt(page),
            limit:parseInt(limit),
            sort:{createdAt:"desc"},
            customLabels:{
                docs:"posts"
            }
        }
    )

    res
    .status(200)
    .json(new ApiResponse(200,{posts},"Posts are fetched successfully"))
})

export {
    getAccountStats, 
    getAccountPosts
    }