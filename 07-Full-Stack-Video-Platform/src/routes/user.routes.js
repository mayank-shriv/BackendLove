
// ============================================
// USER ROUTES MODULE
// ============================================
// This file defines all HTTP routes related to user operations:
// - User registration (with file uploads)
// - User login (authentication)
// - User logout (requires authentication)

// ============================================
// IMPORTS
// ============================================
// Express Router: Creates modular, mountable route handlers
import { Router } from "express";

// Controller Functions: Business logic for user operations
import {
    loginUser,      // Handles user login and JWT token generation
    logOutUser,     // Handles user logout and token invalidation
    registerUser    // Handles new user registration
} from "../controllers/user.controller.js";

// Multer Middleware: Handles multipart/form-data for file uploads
// Used for uploading avatar and cover images during registration
import { upload } from "../middlewares/multer.middlewares.js"

// Authentication Middleware: Verifies JWT tokens for protected routes
import { verifyJwt } from "../middlewares/auth.middlewares.js";

// Create a new Express Router instance
const router = Router();

// ============================================
// PUBLIC ROUTES (No Authentication Required)
// ============================================

/**
 * POST /register
 * 
 * User Registration Route
 * Accepts multipart/form-data with:
 * - User details (username, email, password, etc.)
 * - Avatar image (required) - profile picture
 * - Cover image (optional) - banner/header image
 * 
 * Middleware Chain:
 * 1. upload.fields() - Processes file uploads using Multer
 *    - Accepts 2 fields: "avatar" and "coverImage"
 *    - Each field limited to 1 file (maxCount: 1)
 * 2. registerUser - Controller that handles user creation and file processing
 * 
 * Flow:
 * 1. Multer extracts files from request and saves to temp location
 * 2. Files are accessible via req.files.avatar and req.files.coverImage
 * 3. registerUser processes user data and uploads files to cloud storage
 */
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",       // Form field name for profile picture
            maxCount: 1           // Only 1 avatar allowed per registration
        },
        {
            name: "coverImage",   // Form field name for cover/banner image
            maxCount: 1           // Only 1 cover image allowed per registration
        }
    ]),
    registerUser  // Controller function executed after file upload
)

/**
 * POST /login
 * 
 * User Login Route
 * Accepts JSON data with:
 * - username or email
 * - password
 * 
 * Flow:
 * 1. Validates credentials against database
 * 2. Generates JWT access and refresh tokens
 * 3. Sets tokens in HTTP-only cookies
 * 4. Returns user data (without sensitive fields)
 */
router.route("/login").post(loginUser)

// ============================================
// SECURED ROUTES (Authentication Required)
// ============================================
// All routes below require a valid JWT token in cookies or headers

/**
 * POST /logout
 * 
 * User Logout Route (Protected)
 * 
 * Middleware Chain:
 * 1. verifyJwt - Validates JWT token and attaches user to req.user
 * 2. logOutUser - Invalidates refresh token and clears cookies
 * 
 * Flow:
 * 1. verifyJwt checks for valid access token
 * 2. If valid, user is authenticated and logout proceeds
 * 3. Refresh token is removed from database
 * 4. Cookies are cleared from client
 */
router.route("/logout").post(verifyJwt, logOutUser)

// ============================================
// EXPORT
// ============================================
// Export router to be mounted in main app.js as: app.use('/api/v1/users', userRouter)
export default router;
