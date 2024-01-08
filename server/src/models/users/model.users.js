import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("user", UserSchema);
