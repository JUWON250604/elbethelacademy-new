import mongoose, { Schema, Document } from "mongoose";

export interface IStudentProfile extends Document {
  userId: mongoose.Types.ObjectId;
  classId: mongoose.Types.ObjectId;
  subjects: mongoose.Types.ObjectId[];
}

const StudentProfileSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    classId: { type: Schema.Types.ObjectId, ref: "Class", required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  },
  { timestamps: true }
);

export default mongoose.model<IStudentProfile>("StudentProfile", StudentProfileSchema);
