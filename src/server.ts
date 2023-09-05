import express from "express";
import linkRouter from "./link/link.router";
const app = express();
const port = 3000;

app.use("/", linkRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
