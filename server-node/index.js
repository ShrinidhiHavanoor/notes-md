import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnect from "./Db/config.js";
import subjectRoutes from "./routes/subjectRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
app.use("/api/subject", subjectRoutes);
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
