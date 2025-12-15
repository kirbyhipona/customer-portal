// index.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/bookings.js";
import messageRoutes from "./routes/messages.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/bookings", bookingRoutes);
app.use("/messages", messageRoutes);

app.get("/", (_, res) => res.send("API running"));

app.listen(process.env.PORT || 4000, () =>
  console.log(`Backend running on http://localhost:${process.env.PORT || 4000}`)
);
