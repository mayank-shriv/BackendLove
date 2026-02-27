// ============================================
// DATABASE CONNECTION MODULE
// ============================================
/**
 * Establishes a secure connection to the MongoDB database using Mongoose ODM.
 *
 * CONNECTION PROCESS:
 * 1. Retrieves MongoDB URI from environment variables (MONGODB_URI)
 * 2. Appends the database name (DB_NAME) to create the full connection string
 * 3. Attempts to connect using Mongoose's async connect() method
 * 4. On success: Logs the MongoDB host information
 * 5. On failure: Logs error and terminates the application (process.exit(1))
 *
 * IMPORTANT NOTES:
 * - This function uses async/await for asynchronous database connection
 * - The application will NOT start if the database connection fails (fail-fast pattern)
 * - process.exit(1) indicates abnormal termination (non-zero exit code)
 * - Connection string format: mongodb+srv://user:pass@cluster.mongodb.net/database_name
 *
 * ENVIRONMENT VARIABLES REQUIRED:
 * - MONGODB_URI: Full MongoDB connection string (without database name)
 *   Example: mongodb+srv://username:password@cluster.mongodb.net
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves when connection is successful, rejects on failure
 * @throws {Error} Throws and exits process if connection to MongoDB fails
 *
 * @requires mongoose - MongoDB Object Data Modeling (ODM) library that provides:
 *   - Schema-based data modeling
 *   - Built-in validation
 *   - Query building and population
 *   - Middleware hooks
 * @requires ../constant.js - Application constants including DB_NAME
 *
 * @example
 * // Basic usage (called from index.js)
 * import connectDB from './db/index.js';
 * 
 * connectDB()
 *   .then(() => console.log('Database ready'))
 *   .catch((err) => console.error('Failed to connect', err));
 */

// ============================================
// IMPORTS
// ============================================
// Mongoose: MongoDB ODM for Node.js - handles schema, validation, and queries
import mongoose from "mongoose";
// Import database name constant from application configuration
import { DB_NAME } from "../constant.js";

// ============================================
// CONNECTION FUNCTION
// ============================================
const connectDB = async () => {
  try {
    // DEBUG: Uncomment below to verify MongoDB URI is loaded correctly from .env
    // Useful for troubleshooting connection issues (DO NOT expose in production logs)
    // console.log("ACTUAL MONGO URI =>", process.env.MONGODB_URI);

    // Attempt to connect to MongoDB
    // Connection string structure: {MONGODB_URI}/{DB_NAME}
    // Example: mongodb+srv://user:pass@cluster.mongodb.net/video_platform_db
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // SUCCESS: Log the MongoDB host to confirm which cluster/instance we connected to
    // Useful for verifying connections in multi-environment setups (dev, staging, prod)
    console.log("MongoDB Connected:", connectionInstance.connection.host);
    // Example output: "MongoDB Connected: cluster0-shard-00-00.mongodb.net"

  } catch (error) {
    // FAILURE: Database connection failed - this is a critical error
    console.error("MongoDB connection error", error);

    // Exit the Node.js process with failure code (1)
    // Why? The application cannot function without a database connection
    // Exit code 1 = abnormal termination (useful for process managers like PM2, Docker, Kubernetes)
    // This prevents the server from starting in a broken state
    process.exit(1);
  }
};

// ============================================
// EXPORT
// ============================================
// Export as default so it can be imported as: import connectDB from './db/index.js'
export default connectDB;
