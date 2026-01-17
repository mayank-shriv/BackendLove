import mongoose, { Schema } from "mongoose"
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, // cloudry URL
        required: true
    },
    thumbnail:
    {
        type: String, // cloudry URL
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    describtion: {

        type: String,  
        required: true

    },
    duration : {
        type : String,
        required : true

    },
    view : {
        type : Number,
        default : 0
    },
    isPublished:{
        type : Boolean,
        default : true 
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }


}, { timestamps: true })

videoSchema.plugin(mongooseAggregatepaginate)

export const Video = mongoose.model("Video", videoSchema)