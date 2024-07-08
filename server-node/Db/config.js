import mongoose from "mongoose";

const dbConnect=() => {
  const db = mongoose
    .connect(process.env.MONGODB_URL)
    .then((data) => console.log("MongoDb Connected"))
    .catch((err) => console.log(err));
};
export default dbConnect;

