import mongoose, {Schema} from "mongoose"

const FollowSchema = new Schema({
    follower:{
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    account:{
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true
    
    }
}, {timestamps: true})

export const Follow = mongoose.model("Follow", FollowSchema)