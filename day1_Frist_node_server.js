const http= require("http")

// function requestListner(req,res){
//   console.log(req)

// }
// http.createServer(requestListner)//callback function sending reference 


// or the anonimous function



const server = http.createServer((req,res)=>{
// console.log(req)
})
const port=3000;
server.listen((port,()=>{
  console.log(`server running on address hthp://localhost:${port}`)
}));


// listen also take callback function so we give arrow funtion to listen request from the port varible port most me 2000-9999 is good 
// for stop server just enter ctrl +c in Terminal and restart it
