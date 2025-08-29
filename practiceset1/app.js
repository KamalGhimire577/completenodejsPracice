const http = require("http");
const url = require("url"); // ✅ required for parsing query strings
const calculation = require("./calaculation");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Complete Node.js Coding Home Page </h1>");
    res.write("<p>This is your first Node.js server response!</p>");
    res.write(
      "<button onclick=\"window.location.href='/calculator'\">Go to Calculator</button>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>🧮 Simple Calculator</h1>");
    res.write("<form action='/calculator_result' method='get'>");
    res.write("Number 1: <input type='number' name='num1' required><br>");
    res.write("Number 2: <input type='number' name='num2' required><br><br>");
    res.write("Operation: ");
    res.write("<select name='operation' required>");
    res.write("<option value='add'>Add</option>");
    res.write("<option value='sub'>Subtract</option>");
    res.write("<option value='mul'>Multiply</option>");
    res.write("<option value='div'>Divide</option>");
    res.write("</select><br><br>");
    res.write("<button type='submit'>Calculate</button>");
    res.write("</form>");
    res.write('<br><a href="/">⬅ Back to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.startsWith("/calculator_result")) {
    const queryObject = url.parse(req.url, true).query;
    const num1 = parseFloat(queryObject.num1);
    const num2 = parseFloat(queryObject.num2);
    const operation = queryObject.operation;
    let result = calculation(num1,num2,operation);

    
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator Result</title></head>");
    res.write("<body>");
    res.write(`<h1>Result: ${result}</h1>`);
    res.write('<a href="/calculator">⬅ Back to Calculator</a><br>');
    res.write('<a href="/">⬅ Back to Home</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
