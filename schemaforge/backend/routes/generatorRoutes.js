const express = require('express');
const router = express.Router();
const { generateCode } = require('../controllers/generatorController');

router.post('/compile', generateCode);

module.exports = router;
