const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tagsController");

router.get("/", tagsController.index);

module.exports = router;