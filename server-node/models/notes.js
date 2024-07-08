import { model, Schema } from "mongoose";
const notesSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Note", notesSchema);
