import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config();


connectDB();
console.log("hello")  // checking async and await.