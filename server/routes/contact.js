import { Router } from "express";

const router = Router();

// In-memory store for now. When you add Postgres later, swap this array
// for an INSERT INTO contact_messages (...) VALUES (...) query — the
// route shape below won't need to change.
const messages = [];

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  const entry = { id: messages.length + 1, name, email, message, createdAt: new Date().toISOString() };
  messages.push(entry);

  console.log("New contact message:", entry);
  res.status(201).json({ success: true, entry });
});

router.get("/", (req, res) => {
  res.json(messages);
});

export default router;
