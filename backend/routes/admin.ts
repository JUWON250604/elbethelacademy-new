import express from "express";
import Class from "../models/Class";
import Subject from "../models/Subject";
import TeacherAssignment from "../models/TeacherAssignment";

const router = express.Router();

// Create class
router.post("/class", async (req, res) => {
  try {
    const cls = new Class({ name: req.body.name });
    await cls.save();
    res.status(201).json(cls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create subject
router.post("/subject", async (req, res) => {
  try {
    const subject = new Subject({ name: req.body.name });
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Assign teacher
router.post("/assign", async (req, res) => {
  try {
    const { teacherId, subjectId, classId } = req.body;
    const assignment = new TeacherAssignment({ teacherId, subjectId, classId });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
