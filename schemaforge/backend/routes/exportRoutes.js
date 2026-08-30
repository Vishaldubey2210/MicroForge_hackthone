const express = require('express');
const router = express.Router();
const { exportZip } = require('../controllers/exportController');

router.post('/zip', exportZip);

module.exports = router;
