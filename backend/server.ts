import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || "";
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) =>
    console.error("❌ Failed to connect to MongoDB:", err.message)
  );

// Simple route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Auth routes (stubbed for now)
app.use("/auth", (req, res) => {
  res.send("Auth endpoint placeholder");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Auth endpoints available at http://localhost:${PORT}/auth/*`);
});
