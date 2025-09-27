import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  name: string;
}

const SubjectSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISubject>("Subject", SubjectSchema);
