import express from "express";
import cors from "cors";
import loginRouter from "./routes/loginRouter.js";
import certificateRouter from "./routes/certificateRouter.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
// app.use(express.json()); //parses anything which is incoming to json IMPPPPPP
// const url = 'http://localhost:5000'
app.use((req, res, next) => {
  express.json({
    limit: "50mb",
    extended: true,
  })(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.sendStatus(400); // Bad request
    }
    next();
  });
});
app.use("/", loginRouter);
console.log("app.js");
app.use("/Certificate", certificateRouter);

const PORT = process.env.PORT || 5000;
const url = "mongodb://localhost:27017/ActivityPoints";
app.listen(PORT, () => {
  console.log(`App is running at ${PORT} port`);
});
mongoose.connect(
  "mongodb+srv://main-user-42:main-user-42@cluster0.k9k0a.mongodb.net/ActivityPoints",
  () => {
    console.log("database connected");
  }
);

// mongoose.connect(url, () => {
//   console.log("Database connected");
// });

// .then (()=>app.listen((PORT),()=>console.log(`App is running at ${PORT} port`)))
// .catch((err)=>console.log(err.message))
