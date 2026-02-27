// ============================================
// FILE UPLOAD MIDDLEWARE (MULTER)
// ============================================
// This file configures Multer - a middleware for handling multipart/form-data
// Used primarily for uploading files (images, videos, documents, etc.)

// ============================================
// IMPORTS
// ============================================
// Multer: Node.js middleware for handling file uploads
// Parses multipart/form-data which is primarily used for uploading files
import multer from "multer";

// ============================================
// STORAGE CONFIGURATION
// ============================================
/**
 * Configures the disk storage engine for Multer file uploads.
 * 
 * STORAGE STRATEGY:
 * - Files are temporarily saved to local disk (./public/temp)
 * - Later processed and uploaded to cloud storage (Cloudinary/AWS S3)
 * - Local files are deleted after cloud upload succeeds
 * 
 * WHY TEMPORARY STORAGE?
 * 1. Allows validation before permanent storage
 * 2. Enables image processing (resizing, compression)
 * 3. Provides fallback if cloud upload fails
 * 
 * @constant
 * @type {import('multer').StorageEngine}
 * @property {function} destination - Where to save uploaded files temporarily
 * @property {function} filename - What to name the uploaded file
 */
const storage = multer.diskStorage({
    /**
     * DESTINATION FUNCTION
     * Determines where uploaded files will be stored on the server
     * 
     * @param {import('express').Request} req - Express request object
     * @param {Express.Multer.File} file - The file being uploaded
     *   Contains: fieldname, originalname, encoding, mimetype, size, etc.
     * @param {function} cb - Callback function: cb(error, destination)
     * 
     * Flow:
     * 1. Multer receives a file from the client
     * 2. Calls this function to determine save location
     * 3. Saves file to ./public/temp directory
     * 
     * NOTE: Ensure ./public/temp directory exists before running the app
     */
    destination: function (req, file, cb) {
        // cb(error, destination)
        // null = no error
        // "./public/temp" = save files to this directory
        cb(null, "./public/temp")
    },

    /**
     * FILENAME FUNCTION
     * Determines what name the uploaded file will have on disk
     * 
     * @param {import('express').Request} req - Express request object
     * @param {Express.Multer.File} file - The file being uploaded
     *   file.originalname = original name from user's computer
     * @param {function} cb - Callback function: cb(error, filename)
     * 
     * CURRENT STRATEGY: Use original filename
     * - Simple but has potential issues:
     *   ⚠️ Name collisions (two files named "avatar.jpg")
     *   ⚠️ Special characters in filename
     *   ⚠️ No unique identifier
     * 
     * BETTER PRACTICE (for production):
     * - Add timestamp: `${Date.now()}-${file.originalname}`
     * - Use UUID: `${uuidv4()}-${file.originalname}`
     * - Hash-based: `${crypto.randomBytes(16).toString('hex')}.jpg`
     */
    filename: function (req, file, cb) {
        // cb(error, filename)
        // null = no error
        // file.originalname = keep the original filename from user's device
        cb(null, file.originalname)
    }
})

// ============================================
// MULTER INSTANCE
// ============================================
/**
 * Create and export configured Multer instance
 * 
 * This upload middleware is used in routes like:
 * router.post('/register', upload.fields([...]), registerUser)
 * 
 * COMMON MULTER METHODS:
 * - upload.single('fieldname')   → Single file upload
 * - upload.array('fieldname', 5) → Multiple files (max 5)
 * - upload.fields([{name: 'avatar'}, {name: 'cover'}]) → Multiple fields
 * - upload.none()                → No files, only text fields
 * 
 * USAGE IN YOUR ROUTES:
 * upload.fields([
 *   { name: 'avatar', maxCount: 1 },
 *   { name: 'coverImage', maxCount: 1 }
 * ])
 * 
 * After this middleware runs, files are accessible via:
 * - req.files.avatar[0]     → First (and only) avatar file
 * - req.files.coverImage[0] → First (and only) cover image file
 */
export const upload = multer({
    storage,  // Use the disk storage configuration defined above
    // Additional options you could add:
    // limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype.startsWith('image/')) {
    //         cb(null, true) // Accept image files only
    //     } else {
    //         cb(new Error('Only image files allowed'))
    //     }
    // }
})