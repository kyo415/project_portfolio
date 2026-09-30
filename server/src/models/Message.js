import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ten la bat buoc"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email la bat buoc"],
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, "Noi dung la bat buoc"],
      trim: true,
      maxlength: 3000,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", messageSchema);
