import mongoose, { Schema } from "mongoose"; // Import mongoose and Schema to define data structures
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2"; // Import plugin to handle pagination in aggregation queries

// Define the structure for video documents in the database
const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // Cloudinary URL for the video source
            required: true // Field is mandatory
        },
        thumbnail: {
            type: String, // Cloudinary URL for the video's preview image
            required: true // Field is mandatory
        },
        title: {
            type: String, // The title of the video
            required: true // Field is mandatory
        },
        describtion: { // Note: 'describtion' is used as the key for video details
            type: String, 
            required: true 
        },
        duration: {
            type: String, // Length of the video content
            required: true 
        },
        view: {
            type: Number, // Number of times the video has been watched
            default: 0 // Defaults to 0 views upon creation
        },
        isPublished: {
            type: Boolean, // Controls whether the video is visible to others
            default: true // Published by default
        },
        owner: {
            type: Schema.Types.ObjectId, // Stores the ID of the User who uploaded it
            ref: "User" // Establishes a relationship with the User model
        }
    }, 
    { 
        timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields
    }
);

// Add pagination capabilities to allow fetching large sets of video data in chunks
videoSchema.plugin(mongooseAggregatepaginate);

// Create the 'Video' model and export it for use in other parts of the application
export const Video = mongoose.model("Video", videoSchema);