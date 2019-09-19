const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const indexRoute = require("./routes/index");


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/user", userRoute);


app.listen(3000, () =>
  console.log("Express server is ready on localhost:3000")
);
