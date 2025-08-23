const http= require("http");


// function requestListner(req,res){
//   console.log(req)

// }
// http.createServer(requestListner)//callback function sending reference 


// or the anonimous function



const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);


if (req.url ==='/'){
    res.setHeader("Content-Type", "text/html");
   res.write("<html>");
   res.write("<head><title>Complete Codding</title></head>");
   res.write("<body><h1>Complete node js Codding home page</h1></body>");
   res.write("</html>");
   return res.end();
}
else if(req.url==='/about'){
    res.setHeader("Content-Type", "text/html");
   res.write("<html>");
   res.write("<head><title>Complete Codding</title></head>");
   res.write("<body><h1>Complete node js Codding about</h1></body>");
   res.write("</html>");
    return res.end();

}
  res.setHeader("Content-Type", "text/html");
 res.write("<html>");
  res.write("<head><title>Complete Codding</title></head>");
  res.write("<body><h1>Complete node js Codding</h1></body>");
  res.write("</html>");
  res.end()
}); 
const port=3000;
server.listen(port,()=>{
  console.log(`server running on address hthp://localhost:${port}`)
});


// listen also take callback function so we give arrow funtion to listen request from the port varible port most me 2000-9999 is good 
// for stop server just enter ctrl +c in Terminal and restart it
