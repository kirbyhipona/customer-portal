import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const filePath = path.resolve("data/messages.json");

// Ensure file exists
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, "{}");
}

// Read messages safely
const read = () => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    return {};
  }
};

// Write messages
const write = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get messages for a job
router.get("/:jobId", (req, res) => {
  const data = read();
  res.json(data[req.params.jobId] || []);
});

// Add a new message to a job
router.post("/:jobId", (req, res) => {
  const data = read();
  const { text, from = "customer" } = req.body;

  if (!data[req.params.jobId]) data[req.params.jobId] = [];

  data[req.params.jobId].push({
    text,
    from,
    createdAt: new Date().toISOString(),
  });

  write(data);
  res.json({ success: true });
});

export default router;
