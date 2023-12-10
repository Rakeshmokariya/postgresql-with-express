const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRouter = require("./app/routes/users.route");

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use(bodyParser.json())
app.use("/users", userRouter);

app.listen(port, "0.0.0.0", () => {
  console.log("runnign on port 3000");
});
