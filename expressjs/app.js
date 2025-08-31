
// core module
//const http = require("http")// express can handle all from http module internally
//external modules
const express = require('express')

// making instance or local app of express js or express function
const app = express()

// creating http server
//const server = http.createServer(app)
// local module 
const local1 = require('./local1')
//using local module
const local2 = require("./local2")
// app.use work in sequence or one by one 
app.use(local1);
// because of next function in local 1 we can use also local2 module or middleware
app.use(local2);
const PORT =5050
// server.listen(PORT,()=>{
//   console.log(`server started sucessfully at http://localhost:${PORT}`)
// })

app.listen(PORT, () => {
  console.log(`server started sucessfully at http://localhost:${PORT}`);
});
// // core module
// const http = require("http")
// ✅ This imports Node.js’s built-in HTTP module.

// It lets you create an HTTP server (without needing Express).

// Since it’s a core module, you don’t need to install it via npm.

// js
// Copy code
// // external modules
// const express = require('express')
// ✅ This imports Express.js, an external module (installed via npm install express).

// Express makes building web servers easier than raw http.

// It provides middleware, routing, and request/response handling.

// js
// Copy code
// // making instance or local app of express js or express function
// const app = express()
// ✅ Creates an instance of Express.

// Think of app as your mini web application.

// You use it to define routes (app.get(...), app.post(...)) and middlewares (app.use(...)).

// js
// Copy code
// // creating http server
// const server = http.createServer(app)
// ✅ Creates an HTTP server using the core http module.

// Normally, http.createServer() expects a callback (req, res).

// Here, you pass app (your Express instance).

// Express itself is a function that handles (req, res), so this works perfectly.

// 👉 This means all incoming HTTP requests are first passed through Express.

// js
// Copy code
// // local module  
// const local1 = require('./local1')
// ✅ Imports your first local module from the file local1.js.

// This is code you wrote yourself.

// Typically, local modules export a function (like middleware).

// js
// Copy code
// //using local module
// const local2 = require("./local2")
// ✅ Imports your second local module (local2.js).

// js
// Copy code
// // app.use work in sequence or one by one
// app.use(local1);
// ✅ app.use() adds middleware to Express.

// Middleware are functions that run in order when a request comes.

// Here, local1 will run first.

// 👉 If local1 doesn’t call next(), the request stops there.

// js
// Copy code
// // because of next function in local 1 we can use also local2 module or middleware
// app.use(local2);
// ✅ Adds local2 as the next middleware.

// Because local1 called next(), Express continues to the next middleware.

// If local1 ended the request with res.send() or similar, local2 would never run.

// js
// Copy code
// const PORT = 5050
// ✅ Sets the port number (5050) where the server will listen.

// js
// Copy code
// server.listen(PORT,()=>{
//    console.log(`server started sucessfully at http://localhost:${PORT}`)
// })
// ✅ Starts the server and makes it listen for requests on http://localhost:5050.

// The callback runs after the server successfully starts, logging a confirmation message.

// 🔑 Quick Summary
// Load core module (http) and external module (express).

// Create an Express app.

// Wrap it inside an HTTP server.

// Load local middleware modules (local1, local2).

// Add them with app.use(), executed in sequence.

// Start the server at port 5050.