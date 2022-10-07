import express from "express";
import cors from "cors";
// import { User } from "./models/userSchema.js";
import loginRouter from "./routes/loginRouter.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json()); //parses anything which is incoming to json IMPPPPPP
// const url = 'http://localhost:5000'

// mongoose.connect(
//   // "mongodb+srv://Nishanth:Nishanth@cluster0.5n3do.mongodb.net/user-db"
//   "mongodb://localhost:27017/activityPoints"
// );
app.use("/login", loginRouter);

const PORT = process.env.PORT || 5000;
const url = "mongodb://localhost:27017/ActivityPoints";
app.listen(PORT, () => {
  console.log(`App is running at ${PORT} port`);
});
mongoose.connect(url, () => {
  console.log("Database connected");
});
// .then (()=>app.listen((PORT),()=>console.log(`App is running at ${PORT} port`)))
// .catch((err)=>console.log(err.message))
console.log("connection successfull");
