const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main");

// define the home page route
router.get('/', mainController.index);



module.exports = router;