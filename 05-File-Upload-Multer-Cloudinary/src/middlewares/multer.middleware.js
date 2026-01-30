import multer from "multer";

/**
 * Configure Multer disk storage:
 * - destination: Sets the folder path where uploaded files will be temporarily stored.
 * - filename: Retains the original name of the uploaded file.
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

/**
 * Export the multer middleware instance using the configured storage engine.
 * This can be used in routes to handle multipart/form-data file uploads.
 */
export const upload = multer({
    storage,
})
