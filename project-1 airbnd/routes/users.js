const express = require("express");
const router = express.Router();

// Fake in-memory DB
let users = [{ id: 1, name: "John Doe" }];

// GET all users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// GET single user
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
});

// POST create new user
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser); // 201 Created
});

// PUT update user
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.name = req.body.name || user.name;
  res.status(200).json(user);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(userIndex, 1);
  res.status(204).send(); // 204 No Content
});

module.exports = router;
