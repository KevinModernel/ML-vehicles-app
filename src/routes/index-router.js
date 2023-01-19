const express = require("express");
const router = express.Router();
const { displayForm, getData } = require('../controllers/index-controllers.js');

// Routes /API/

router.get('/listado/:marca/:modelo', getData);

module.exports = router
