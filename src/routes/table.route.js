const express = require('express');
const router = express.Router();

const TableController = require('../controllers/table.controller');

router.post('/', TableController.create);
router.get('/', TableController.get);
module.exports = router;