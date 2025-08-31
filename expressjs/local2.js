const local2 = (req, res) => {
  console.log("i am inside the local2 module");
   res.write("<h1>hi this is me  from local2</h1>")
   //res.send("<h1>hi this is me  from local2</h1>")
  console.log(req.method)
   res.end();
  
  
};
module.exports = local2;
// res.send() → Ends the response immediately (like saying “Done, close the connection”).

// res.write() → Writes to the response stream but keeps it open, so you can still add more later until you call res.end().
