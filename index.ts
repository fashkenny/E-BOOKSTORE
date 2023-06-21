import express, { Application } from "express";

import mongoose from "./Config/dataBase";

import Router from "./Router/BookRouter";

const port: number = 4500;


const app: Application = express();
mongoose;
app.use(express.json());


app.use("/api", Router);

app.listen(port, () => {
  console.log("");
  console.log(`Server is running and listening to port on ${port}`);
});
