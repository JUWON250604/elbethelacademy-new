import express from "express";
import StudentProfile from "../models/StudentProfile";
import Grade from "../models/Grade";

const router = express.Router();

// Get student profile
router.get("/:id", async (req, res) => {
  try {
    const student = await StudentProfile.findOne({ userId: req.params.id })
      .populate("classId")
      .populate("subjects");
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get grades (only released ones)
router.get("/:id/grades", async (req, res) => {
  try {
    const grades = await Grade.find({ studentId: req.params.id, released: true }).populate("subjectId");
    res.json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
