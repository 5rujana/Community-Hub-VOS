import {asyncHandler} from "../utils/asynchandler.js"
import {ApiError} from "../utils/apiErros.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.service.js"
import {ApiResponse} from "../utils/apiresponse.js"
import jwt from "jsonwebtoken"


const registerUser = asyncHandler(async (req,res) =>{
    const {fullname,email,phone_number,password} = req.body
    console.log(`email: ${email}`)
    if([fullname,email,username,password].some((field)=>field.trim()==="")){
        throw new ApiError(404,"All fields are required")
    }

    const existingUser = await User.findOne({
        $or:[{Username},{email}]
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

export {registerUser,
        loginUser,
        logoutUser,
        refreshAccessToken
} 


