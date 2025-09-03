const express = require("express");
const router = express.Router();

// Fake in-memory DB
let products = [{ id: 1, name: "Laptop", price: 1000 }];

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// GET single product
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// POST create new product
router.post("/", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  res.status(200).json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(204).send();
});

module.exports = router;
