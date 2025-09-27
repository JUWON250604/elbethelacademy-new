import mongoose, { Schema, Document } from "mongoose";

export interface IGrade extends Document {
  studentId: mongoose.Types.ObjectId;
  subjectId: mongoose.Types.ObjectId;
  teacherId: mongoose.Types.ObjectId;
  score: number;
  released: boolean;
}

const GradeSchema: Schema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    score: { type: Number, required: true },
    released: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IGrade>("Grade", GradeSchema);
