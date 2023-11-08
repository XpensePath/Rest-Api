const express = require('express');
const getCategories = require('./api/getCategories');

const router = express.Router();

const basePath = '/categories';

router.get(basePath, getCategories);

module.exports = router;
