const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/categotyController");
const autorition =require("../middelwares/autorition")

router.get('/getAllCategories', categoryController.getAllCategories);
router.post('/createCategory',autorition.createToken, categoryController.createCategory)

module.exports = router;