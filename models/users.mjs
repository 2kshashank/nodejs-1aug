import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name : String,
    age : Number,
    location : String
})

export const UserModel = mongoose.model("Users", UserSchema, "users")