import mongoose ,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const postSchema = new Schema({
    postFile:{
        type:string, //cloudinary url
        required: true,
    },
    caption :{
        type:string,
        required:true,
    },
    thumbnail:{
        type:string
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