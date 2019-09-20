const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({
    title: "Welcome to Express"
  });
});

module.exports = router;
