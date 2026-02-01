/**
 * Establishes a connection to the MongoDB database using Mongoose.
 *
 * This function attempts to connect to the MongoDB instance specified by the
 * `MONGODB_URI` environment variable and the database name defined in `DB_NAME`.
 * If the connection is successful, it logs the host of the connected instance.
 * If the connection fails, it logs the error and exits the process with a non-zero status.
 *
 * @async
 * @function connectDB
 * @throws {Error} If the connection to MongoDB fails.
 *
 * @requires mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
 * It provides a straightforward, schema-based solution to model application data.
 * @requires ../constant.js - Contains the `DB_NAME` constant, which specifies the name of the database to connect to.
 * @example
 * // Ensure the MONGODB_URI environment variable is set before calling this function.
 * connectDB();
 */
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    // console.log("ACTUAL MONGO URI =>", process.env.MONGODB_URI);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("MongoDB Connected:", connectionInstance.connection.host);
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
