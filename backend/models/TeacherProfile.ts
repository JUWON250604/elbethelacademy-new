import mongoose, { Schema, Document } from "mongoose";

export interface ITeacherProfile extends Document {
  userId: mongoose.Types.ObjectId;
  subjects: mongoose.Types.ObjectId[];
  classes: mongoose.Types.ObjectId[];
}

const TeacherProfileSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
    classes: [{ type: Schema.Types.ObjectId, ref: "Class" }],
  },
  { timestamps: true }
);

export default mongoose.model<ITeacherProfile>("TeacherProfile", TeacherProfileSchema);
