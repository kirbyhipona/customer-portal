import express from "express";
import { getBookings, getBooking } from "../services/servicem8.js";

const router = express.Router();

router.get("/", async (_, res) => {
  const bookings = await getBookings();
  res.json(bookings);
});

router.get("/:id", async (req, res) => {
  const booking = await getBooking(req.params.id);
  res.json(booking);
});

export default router;
