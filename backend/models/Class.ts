import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  name: string;
}

const ClassSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<IClass>("Class", ClassSchema);
