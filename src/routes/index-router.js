const express = require("express");
const router = express.Router();
const { displayForm, getData } = require('../controllers/index-controllers.js');

// Routes /
router.get('/', displayForm);
router.post('/listado', getData);

module.exports = router