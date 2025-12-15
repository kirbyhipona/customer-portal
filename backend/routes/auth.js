import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, phone } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ error: "Missing email or phone" });
  }

  res.json({
    token: "mock-token",
    customerId: email
  });
});

export default router;
