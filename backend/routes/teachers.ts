import express from "express";
import TeacherAssignment from "../models/TeacherAssignment";
import StudentProfile from "../models/StudentProfile";
import Grade from "../models/Grade";

const router = express.Router();

// Get teacher's classes & subjects
router.get("/:id/assignments", async (req, res) => {
  try {
    const assignments = await TeacherAssignment.find({ teacherId: req.params.id })
      .populate("classId")
      .populate("subjectId");
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get students in a class
router.get("/:classId/students", async (req, res) => {
  try {
    const students = await StudentProfile.find({ classId: req.params.classId }).populate("userId");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Grade a student
router.post("/grade", async (req, res) => {
  try {
    const { studentId, subjectId, teacherId, score } = req.body;

    const grade = new Grade({ studentId, subjectId, teacherId, score });
    await grade.save();

    res.status(201).json({ message: "Grade recorded" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Release grades
router.post("/release/:classId", async (req, res) => {
  try {
    await Grade.updateMany({ released: false }, { $set: { released: true } });
    res.json({ message: "Grades released" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
