import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    password : String
})

const userModel = new mongoose.model("user", userSchema);
export default userModel;