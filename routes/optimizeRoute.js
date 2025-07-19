const express = require('express');
const router = express.Router();
const { optimizeRoute } = require('../controllers/optimizeController');

router.post('/optimize', optimizeRoute);

module.exports = router;