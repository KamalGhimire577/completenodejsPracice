
const http = require('http');
const logical=require("./logicalerror")
const testingsyntax = require('./sytax')
const runtime = require("./runtimeerror")
const server = http.createServer((req,res)=>{
console.log(req.url,req.method);
// testingsyntax()
//runtime()
//logical()
})


const PORT = 3666
server.listen(PORT,()=>(
  console.log(`the server running on port ${PORT}`)
))