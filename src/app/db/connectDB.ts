import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
