const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  addNewUser,
  deleteUser,
  updateUser
} = require("../controllers/index");


router.get("/", getAll)
router.get("/:id", getById)
router.post("/", addNewUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)


module.exports = router;
