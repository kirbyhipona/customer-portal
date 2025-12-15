import dotenv from "dotenv";
dotenv.config();

import axios from "axios";

if (!process.env.SERVICEM8_TOKEN) {
  throw new Error("SERVICEM8_TOKEN is missing in .env");
}

const client = axios.create({
  baseURL: "https://api.servicem8.com/api_1.0",
  headers: {
    "X-Api-Key": process.env.SERVICEM8_TOKEN, // <-- correct header
    Accept: "application/json",
  },
});

export const getBookings = async () => {
  try {
    const res = await client.get("/job.json");
    return res.data;
  } catch (err) {
    console.error("ServiceM8 API error:", err.response?.status, err.response?.data);
    throw err;
  }
};

export const getBooking = async (id) => {
  try {
    const res = await client.get(`/job/${id}.json`);
    return res.data;
  } catch (err) {
    console.error("ServiceM8 API error:", err.response?.status, err.response?.data);
    throw err;
  }
};
