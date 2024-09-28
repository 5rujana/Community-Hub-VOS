import mongoose ,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const postSchema = new Schema({
    postFile:{
        type:String, //cloudinary url
        required: true
    },
    caption :{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String
    },
    views:{
        type:Number,
        ref:"0"
    },
    Likes:{
        type:Number,
        ref:"0"
    },
    Shares:{
        type:Number,
        ref:"0"
    },
    isPosted:{
        type: Boolean,
        default:true
    },
    owner: {
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

postSchema.plugin(mongooseAggregatePaginate)
export const Post = mongoose.model("Post",postSchema)