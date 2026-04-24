import express from "express";
import { connectToDatabase } from "../lib/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const connection = await connectToDatabase();

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    if (rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await connection.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error connecting to database",
      error: error.message,
    });
  }
});

export default router;
