// ============================================
// ENVIRONMENT CONFIGURATION
// ============================================
// Load environment variables from .env file into process.env
// IMPORTANT: This MUST be the first import to ensure all environment variables
// (like PORT, DATABASE_URI, JWT_SECRET, etc.) are available before any other modules load
import "dotenv/config";   // 🔥 MUST be first

// ============================================
// IMPORT DEPENDENCIES
// ============================================
// Import the database connection function
import connectDB from "./db/index.js";
// Import the configured Express app instance
import { app } from "./app.js";

// ============================================
// APPLICATION STARTUP SEQUENCE
// ============================================
// Step 1: Connect to MongoDB database
connectDB()
  // Step 2: Once database connection is successful, start the Express server
  .then(() => {
    
    // Start listening for incoming HTTP requests
    // Use PORT from environment variables, fallback to 3000 if not set
    app.listen(process.env.PORT || 3000, () => {
      // Log success message when server is ready to accept connections
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  // Step 3: Handle database connection errors
  .catch((err) => {
    // Log error message and error details if MongoDB connection fails
    // Application will not start if database connection fails
    console.log("MongoDB connection failed!!", err);
  });

