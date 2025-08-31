const local1 =(req,res,next)=>{
  console.log("i am inside the local1 module")
// res.send("<h1>hi this is me inside local 1 </h1>")
 res.write("<h1>hi this is me inside local 1 </h1>")
 console.log(req.method)
 next()
}
module.exports = local1