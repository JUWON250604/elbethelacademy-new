import mongoose, { Schema, Document } from "mongoose";

export interface ITeacherAssignment extends Document {
  teacherId: mongoose.Types.ObjectId;
  subjectId: mongoose.Types.ObjectId;
  classId: mongoose.Types.ObjectId;
}

const TeacherAssignmentSchema: Schema = new Schema(
  {
    teacherId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    classId: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITeacherAssignment>("TeacherAssignment", TeacherAssignmentSchema);
