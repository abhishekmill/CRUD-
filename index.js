import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/mobile.routes.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 4000;
const DB_connect = process.env.URI;

// routing starts from here
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(DB_connect)
  .then(() => {
    console.log("database connected sucessfully");
    app.listen(port, () => {
      console.log(`server is listenong at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
