# 🚀 Express.js & Full-Stack Development – Interview-Ready Notes

---

## 1️⃣ Node.js

### What is Node.js
Node.js is a **JavaScript runtime built on Chrome’s V8 engine** that allows JavaScript to run **outside the browser** for backend development.

### Why Node.js is used
- Uses JavaScript for both frontend and backend  
- Non-blocking, event-driven architecture  
- Handles thousands of concurrent requests  
- Used by Netflix, Uber, LinkedIn, PayPal  

### Core Architecture
Client → Event Loop → Non-Blocking I/O → Callback → Response


---

## 2️⃣ Express.js

### What is Express
Express.js is a **minimal and flexible Node.js framework** used to build **REST APIs and backend servers**.

### What Express Provides
- Routing  
- Middleware system  
- Request & response handling  
- API building  

---

## 3️⃣ Middleware

Middleware is a **function that runs between request and response**.


### Types
- Built-in (`express.json`)
- Custom
- Third-party (`cors`, `morgan`, `helmet`)

```js
app.use(express.json());
```
4️⃣ HTTP Status Codes
Code	Meaning
200	OK
201	Created
400	Bad Request
401	Unauthorized
403	Forbidden
404	Not Found
500	Server Error
res.status(201).json({ message: "User created" });



5️⃣ REST API Rules

REST APIs are:

Stateless

Resource-based

Use HTTP methods

Bad:

/getUsers


Good:

GET /users
POST /users
PUT /users/5
DELETE /users/5

6️⃣ Express Request Objects
Property	Usage
req.params	URL values
req.query	Query string
req.body	POST data
req.headers	Client info
7️⃣ MongoDB vs SQL
    SQL	      MongoDB
    Tables	  Collections
    Rows	    Documents
    Fixed
    schema	  Flexible schema

Node + Express + MongoDB = MERN Stack

8️⃣ JWT Authentication

JWT is used for secure login systems.

Flow:

Login → Server verifies → Creates JWT → Client stores → Sends token with every request

Authorization: Bearer <token>

9️⃣ MVC Architecture
Model → Database
View → Frontend
Controller → Business Logic

🔟 Environment Variables

Used to store:

Database password

API keys

JWT secret

Port number

## **Never upload .env to GitHub.**

11️⃣ Axios vs Fetch
Axios	Fetch
Auto JSON parsing	     Manual
Better error handling	      Poor
Interceptors                   	No

12️⃣ CORS

CORS is a browser security system that controls which frontend can access which backend.

13️⃣ Deployment Flow
Frontend → Vercel / Netlify  
Backend → Render / Railway  
Database → MongoDB Atlas  

14️⃣ Production Checklist

Use dotenv

Enable CORS

Use Helmet

Use Morgan

Use try-catch

Centralized error handling

15️⃣ Interview Question

Why Express over Node HTTP module?

Express provides routing, middleware, better structure, and production-ready features.
Node HTTP is low-level and harder to manage.

16️⃣ One-Line Summary

Node.js → Backend runtime
Express.js → API framework
MongoDB → Database
JWT → Authentication
Axios → API calls
Git → Version control
Vite → Frontend tooling


