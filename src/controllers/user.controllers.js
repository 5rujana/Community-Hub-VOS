import {asyncHandler} from "../utils/asynchandler.js"
import {ApiError} from "../utils/ApiErros.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.service.js"
import {ApiResponse} from "../utils/apiresponse.js"
import jwt from "jsonwebtoken"


const registerUser = asyncHandler(async (req,res) =>{
    const {fullname,email,username,password} = req.body
    console.log(`email: ${email}`)
    if([fullname,email,username,password].some((field)=>field.trim()==="")){
        throw new ApiError(404,"All fields are required")
    }

    const existingUser = await User.findOne({
        $or:[{username},{email}]
    })
    
    if(existingUser){
        throw new ApiError(409,"User already exists")
    }
    console.log(req.files) 

    const avatarLocalPath = req.files?.avatar[0]?.path
    let coverImageLocalPath
    if(req.files && Array.isArray(req.files.coverImage)&& req.files.coverImage.length>0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if(!avatarLocalPath){
        throw new ApiError(400,"Avtar is required")
    }

    const avatar = await UploadOnCloudinary(avatarLocalPath)
    const coverImage = coverImageLocalPath ? await UploadOnCloudinary(coverImageLocalPath) : null
    if(!avatar){
        throw new ApiError(500,"Failed to upload image")
    }
    const user = await User.create({
        fullname,
        email,
        username:username.toLowerCase(),
        password,
        avatar:avatar.url,
        coverImage:coverImage?.url || ""
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Failed to register user")
    }
    return res.status(201).json(
        new ApiResponse(201,createdUser,"User registered successfully")

    )
 
})


const loginUser = asyncHandler(async(req,res)=>{

    const {email,username,password} = req.body
    console.log(email)
 
    if(!email && !username){
        throw new ApiError(400,"Email and username is required")
    }
    const user = await User.findOne({
        $or:[{email},{username}]

    })

    if(!user){
        throw new ApiError(404,"User not found")
    }

    const isPasswordValid = await user.isPasswordMatch(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid user credentials")
    }
    
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)
    
    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    const options ={
        httpOnly : true, 
        secure:true 
    }

    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken,refreshToken

            },
            "User logged in successfully"
        )
    )

})

const logoutUser = asyncHandler(async(req,res)=>{
    //clear cookies
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined
            }
        },
        {
            new:true
        }
    )

    const options = {
        httpOnly:true,
        secure:true,
    }

    return res.status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{}, "User logged out successfully") //{data} par idhar kuch bhi data return nehi kar raha hai
    )
    
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
        throw new ApiError(401,"Unauthorized request")
    } 

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
            )
    
        const user = await User.findById(decodedToken._id)
    
        if(!user){
            throw new ApiError(404,'Invalid refresh token')
    
        }
    
        if(user?.refreshToken !== incomingRefreshToken){
            throw new ApiError(401,"Refresh token is expired or used")
        }
    
        const options = {
            httpOnly:true,
            secure:true
        }
    
        const {accessToken,newrefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res.status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newrefreshToken,options)
        .json(
            new ApiResponse(200,{accessToken,newrefreshToken}, "Access token refreshed successfully")
        )
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid refresh token ")
    }


})


const changeCurrentPassword = asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword,confPassword} = req.body
    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordMatch(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(400, "Inva lid old password")
    }

    if(!(newPassword === confPassword)){
        throw new ApiError(402, "Passwords doesn't match")
    }

    if(!(newPassword===oldPassword)){
        throw new ApiError(403, "New password is already used Password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200,{},"password changed successfully"))
})

const updateAccountDetails = asyncHandler(async(req,res)=>{
    const {fullname, email} = req.body

    if([fullname,email].some((feild)=> feild?.trim()==="")){
        throw new ApiError(400,"All feilds are required")
    }

    const user = await User.findByIdAndUpdate(req.user?._id,
        {
            $set:{
                fullname,
                email
            }
        },
        {
            new:true
        }

    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(new ApiResponse(200,{},"User details updated successfully"))

    
})

const getCurrentUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user?._id).select("-password -refreshToken")
    return res
    .status(200)
    .json(new ApiResponse(200,user,"User details fetched successfully"))
})

const updateUserAvatar = asyncHandler(async(req,res)=>{
    const avatarLocalPath =  req.file?.path 

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is missing")
    }

    const avatar = await UploadOnCloudinary(avatarLocalPath)

    if(!avatar.url){
        throw new ApiError(400,"Error while uploading on avatar")
    }

    await User.findByIdAndUpdate(req.user?._id,
        {
            $set:{
                avatar:avatar.url
            }
        },
    {new:true}).select("-password -refreshToken")

    //create a utility function to delete the old avatar from cloudinary
    return res
    .status(200)
    .json(new ApiResponse(200,{},"Avatar updated successfully"))
    
})

const updateUserCoverImage = asyncHandler(async(req,res)=>{
    const coverImageLocalPath =  req.file?.path 

    if(!coverImageLocalPath){
        throw new ApiError(400,"Cover Image file is missing")
    }

    const coverImage = await UploadOnCloudinary(coverImageLocalPath)

    if(!coverImage.url){
        throw new ApiError(400,"Error while uploading on cover image")
    }

    await User.findByIdAndUpdate(req.user?._id,
        {
            $set:{
                coverImage:coverImage.url
            }
        },
    {new:true}).select("-password -refreshToken")
    //create a utility function to delete the old coverImage from cloudinary
    return res
    .satatus(200)
    .json(new ApiResponse(200,{},"Cover Image updated successfully"))
    
})

const getUserAccountProfile = asyncHandler(async(req,res)=>{
    const {username} = req.params 
    if(!username?.trim()){
        throw new ApiError(404,"Username is missing")
    }

    const account = await User.aggregate([ 
        {
            $match:{
                username:username.toLowerCase()
            }
        },
        {
            $lookup:{
                from:"Follows",
                localField:"_id",
                foreignField:"account",
                as:"followers"
            }
        },

        {
            $lookup:{
                from:"Follows",
                localField:"_id",
                foreignField:"follower",
                as:"following"
            
            }
        },
        {
            $addFields:{
                totalFollowers:{$size:"$followers"},
                totalfollowing:{$size:"$following"},
                isUserFollowing:{
                    $cond:{
                        if:{ $in:[req.user?._id,"$folloers.follower"]}, 
                        then:true,
                        else:false
                    }}
            }
        },

        {
            $project:{
                fullname:1,
                username:1,
                avatar:1,
                coverImage:1,
                totalFollowers:1,
                totalfollowing:1,
                isUserFollowing:1
            }
        }
     ])

     console.log(account)
    if(!account?.length){
        throw new ApiError(404,"Account not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200,channel[0],"Account profile fetched successfully"))
    
}) 

export {registerUser,
        loginUser,
        logoutUser,
        refreshAccessToken,
        changeCurrentPassword,
        updateAccountDetails,
        getCurrentUser,
        updateUserAvatar,
        updateUserCoverImage,
        getUserAccountProfile
} 


