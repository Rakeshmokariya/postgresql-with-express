const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRouter = require("./app/routes/users.route");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const env = process.env;

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = user;
    next();
  });
};

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
console.log(require('crypto').randomBytes(32).toString('hex'))
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/users", userRouter);

app.listen(port, "0.0.0.0", () => {
  console.log("runnign on port 3000");
});

app.use(authenticateJWT);

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;
// const db = require("./db.config");
// const jwt = require("jsonwebtoken");

// // const usersRouter = require("./src/routes/users.route");
// const secretKey = "rakesh@123";

// const authenticateJWT = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Forbidden" });
//     }

//     req.user = user;
//     next();
//   });
// };

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await db.getUserByUsernameAndPassword(username, password);
//     // Authenticate user (you may replace this with your own authentication logic)
//     if (user) {
//       const token = jwt.sign({ userId: user.id }, secretKey);

//       res.json({ token });
//     } else {
//       res.status(401).json({ message: "Authentication failed" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.get("/", (req, res) => {
//   res.json({ message: "ok" });
// });

// app.use(authenticateJWT);
// app.get("/users", db.getUsers);
// app.get("/users/:id", db.getUserById);
// app.post("/users", db.createUser);
// app.put("/users/:id", db.updateUser);
// app.delete("/users/:id", db.deleteUser);

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
