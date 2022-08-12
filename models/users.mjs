import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: { required: true, type: String },
  lastName: String,
  username: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
});

export const UserModel = mongoose.model("Users", UserSchema, "users");
