import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken" //bearer token
import bcrypt from "bcrypt"
const userSchema = new Schema({
    fullname :{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //for efficient searching
    },
    avatar:{
        type:String, //cloudinary url
        required:true
    },
    coverImage: {
        type:String //cloudinary url
    }, // we should add activity schema too
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshtoken:{
        type:String 
    }
    
},{
    timestamps:true
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hash(this.password,10)
    next()
})

//let's create a method to check the password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
//in arrow functions we can't access this

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            applicant_id:this.applicant_id,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)
//bcrypt used for passwords