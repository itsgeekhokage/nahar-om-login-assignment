import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName : "userProject"
        })
        console.log("database connected successfully...");
    } catch (error) {
        console.log("Internal database error", error);
    }
}

export default connectDb;