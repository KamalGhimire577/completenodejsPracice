const express = require("express");
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example middlewares
app.use("/", (req, res, next) => {
  console.log("we are in first middleware", req.url, req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("we are in second middleware", req.url, req.method);
  next();
});

// GET Home
app.get("/", (req, res) => {
  console.log("we are in get / middleware", req.url, req.method);
  res.send("<p>this is complete node js coding</p>");
});

// GET request → Show contact form
app.get("/contact-us", (req, res) => {
  console.log("we are in contact us middleware", req.url, req.method);
  res.send(`
    <form action="/contact-us" method="POST">
      <label for="name">Name:</label><br/>
      <input type="text" id="name" name="name" required /><br/><br/>

      <label for="email">Email:</label><br/>
      <input type="email" id="email" name="email" required /><br/><br/>

      <button type="submit">Submit</button>
    </form>
  `);
});

// POST request → Handle form submission
app.post("/contact-us", (req, res) => {
   console.log("we are in contact us post method middleware")
  const { name, email } = req.body;// parsing require
  console.log("Form Submitted:", name, email);

  res.send(`
    <h2>Thank you, ${name}!</h2>
    <p>We have received your message at ${email}.</p>
  `);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log("The server is running on port", port);
});
