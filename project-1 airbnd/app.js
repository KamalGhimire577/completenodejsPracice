const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routers
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

// Use Routers
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Mini Project with Express Router 🚀");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route(page) not found" });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
