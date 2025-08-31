// Importing the Express framework (external module)
const express = require("express");

// Creating an instance of an Express application
const app = express();

// Importing local middleware/module from 'local1.js'
const local = require("./local1");

// Importing local middleware/module from 'local2.js'
const local1 = require("./local2");

app.use("/",(req,res,next)=>{
  console.log("we are in first middleware",req.url,req.method)
  //res.send("<p>this is first / respose  </p>")
  next()
})

app.use("/",(req,res,next)=>{
  console.log("we are in second middleware",req.url,req.method)
  res.send("<p>this is second / respose  </p>")
  next()
})// the main motive of above is when we send the respose we cant go forther even the next() funstion included



// Registering the 'local' middleware on the route '/local'
// 👉 Whenever a request comes to http://localhost:3000/local,
// this middleware will run

app.use("/local", local);

// Registering the 'local1' middleware on the route '/local2'
// 👉 Whenever a request comes to http://localhost:3000/local2,
// this middleware will run
app.use("/local2", local1);

// Defining the port number for the server to listen on
const port = 3000;

// Starting the Express server and making it listen on port 3000
// The callback runs after the server starts successfully
app.listen(port, () => {
  console.log("the server was running on port 3000");
});
