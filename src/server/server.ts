import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.send("Welcome to the Test Dashboard");
});

app.set("view engine", "ejs");

app.listen(port, () => {
  console.info(`server started at http://localhost:${port}`);
});
