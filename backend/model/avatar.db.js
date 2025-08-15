import mongoose from "mongoose";

const avatarSchema = new mongoose.Schema(
  {
    presetId: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Avatar = mongoose.model("Avatar", avatarSchema);

export default Avatar;
