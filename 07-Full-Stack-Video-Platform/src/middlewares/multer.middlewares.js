import multer from "multer";

/**
 * Configures the storage engine for multer to handle file uploads.
 * 
 * @constant
 * @type {import('multer').StorageEngine}
 * @property {function} destination - Specifies the destination folder for uploaded files.
 * @property {function} filename - Determines the name of the file to be saved.
 * @param {import('express').Request} req - The HTTP request object.
 * @param {Express.Multer.File} file - The uploaded file object.
 * @param {function} cb - A callback function to specify the destination or filename.
 */
const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, "./public/temp")
    },
    filename : function (req, file, cb){
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})