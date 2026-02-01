// Importing required modules
import express from "express"; // Express framework for building web applications
import cors from "cors"; // Middleware for enabling Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Middleware for parsing cookies

// Creating an instance of the Express application
const app = express();

// Enabling CORS with specific options
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse incoming JSON requests with a size limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data with extended syntax and a size limit of 16kb
app.use(express.urlencoded({
    extended: true, // Use extended syntax for parsing
    limit: "16kb" // Limit the size of the request body
}));

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Importing user routes
import userRoutes from "./routes/user.routes.js";

// Declaring routes for the application
app.use("/api/v1/user", userRoutes); // Mounting user routes at the specified path

// Exporting the Express application instance
export { app };