import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, username, password } = req.body;
    // Updated 'fullName' to 'fullname' to match the schema
    console.log("email", email);
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for Images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db 
    // remove password and refresh token field from response 
    //  check for user creation 
    //return res
    // res.status(200).json({
    //     success: true,
    //     message: "User registration endpoint hit",
    //     data: { email }
    // })

    // Advance one 
    if(
        [fullname, email, username, password].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400, "All fields are required")
    }

   const existedUser = await User.findOne({
        $or: [{username},{ email}]
    })
   if (existedUser){
    throw new ApiError(409, "User with email and email already exists")
   }
   console.log("Uploaded files:", req.files);
   console.log("Request body:", req.body);

   const avatarLocalPath = req.files?.avatar?.[0]?.path;
   if (!avatarLocalPath) {
       console.error("Avatar file is missing in the request:", req.files);
       throw new ApiError(400, "Avatar file is required. Please upload a valid file.");
   }

   const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
   if (!coverImageLocalPath) {
       console.error("Cover image file is missing in the request:", req.files);
       throw new ApiError(400, "Cover image file is required. Please upload a valid file.");
   }
   const avatar = await uploadOnCloudinary(avatarLocalPath);
   const coverImage = await uploadOnCloudinary(coverImageLocalPath);
   if (!avatar){
    throw new ApiError(400, "Avatar file is required")
   }
    const user = await User.create({
    fullname,
    avatar : avatar.url,
    coverImage : coverImage?.url || " ",
    email,
    password,
    username : username.toLowerCase()

   })
   const createdUser =  await User.findById(user.id).select(
    "-password -refreshToken"
   )
   if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering the user")
   }
   return res.status(201).json(
    new ApiResponse(200, createdUser, "User Registered Successfully")
    )
}
)


   

export { registerUser }