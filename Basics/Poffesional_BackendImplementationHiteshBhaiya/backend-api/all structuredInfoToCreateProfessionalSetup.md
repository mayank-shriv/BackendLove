# Professional Backend Setup Info
---

## First check dependencies

node -v
npm -v
git --version 

## Initialize node
npm init -y 

Skips Interactive Prompts: While a standard npm init asks a series of questions (such as project name, version, and description), adding the -y (or --yes) flag answers "yes" to all prompts automatically.


## Folder and file creation

backend-api/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   └── utils/
│
├── .env
├── .gitignore
├── package.json
└── README.md


## Install runtime dependencies
npm install express dotenv cors


express: A fast, minimalist web framework for Node.js used to build APIs and web applications.
dotenv: Loads environment variables from a .env file into process.env, allowing you to keep sensitive data like API keys and database credentials out of your source code.
cors: A middleware package that enables "Cross-Origin Resource Sharing," allowing your server to accept requests from different domains (e.g., a React frontend running on a different port).


## Dev dependencies
npm install -D nodemon eslint prettier


The -D Flag
The -D (or --save-dev) flag tells npm to add these packages to the devDependencies section of your package.json. These tools are only used during local development and are not bundled when you deploy the app. 
Package Breakdown
nodemon: A utility that monitors your project for any file changes and automatically restarts the server.
Why use it? It saves time by eliminating the need to manually stop and start your Node.js process every time you edit code.
eslint: A static code analysis tool (linter) that identifies problematic patterns or code that doesn't adhere to specific style guidelines.
Why use it? It acts like a "code detective" to catch syntax errors and enforces best practices (e.g., preventing unused variables).
prettier: An "opinionated" code formatter that automatically reformats your code to ensure a consistent style.
Why use it? It handles the aesthetics—like indentation, trailing commas, and line length—so your entire team's code looks identical. 

## DB setup
npm install mongoose


What is Mongoose?
Mongoose provides a structured, schema-based way to interact with your MongoDB database. While MongoDB is natively "schema-less," Mongoose allows you to define a predictable data structure at the application level. 
Key Features 
Schemas & Models: Define the exact shape of your documents (e.g., ensuring a user always has an email string).
Built-in Validation: Automatically checks data types and custom constraints before saving to the database.
Middleware (Hooks): Run logic automatically before or after specific actions, such as hashing a password before a save operation.
Query Building: Provides a fluent, readable API for complex database searches (e.g., .find().sort().limit()).
Population: Easily reference and link documents in different collections, similar to joins in SQL. 