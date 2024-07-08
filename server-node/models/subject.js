import { model, Schema } from "mongoose";
const subjectSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Subject", subjectSchema);
