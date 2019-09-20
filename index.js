require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const indexRoute = require("./routes/index");


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000

app.use("/", indexRoute);
app.use("/user", userRoute);
console.log(process.env)

app.listen(PORT, () =>
  console.log("Express server is ready on localhost:3000")
);
