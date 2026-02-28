import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// console.log("Cloudinary Config:", {
    // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET
// });



const uploadOnCloudinary = async (localPath) => {
    // upload the file on cloudinary
    try {
        if (!localPath) return null
        const responce = await cloudinary.uploader.upload(localPath, {
                resource_type: "auto"
        })
        //file successfully uploaded
        // console.log("File Uploaded succeessfully",responce.url);
        return responce;
        
    }catch(error)
    {
        console.error("Error uploading file to Cloudinary:", error);

        fs.unlink(localPath, (err) => {
            if (err) {
                console.error("Failed to delete local file:", err);
            } else {
                console.log("Local file deleted successfully");
            }
        });

        return null; // Ensure a proper return value in case of error
    }

}

export {uploadOnCloudinary}