const express = require('express');
const getBankAccount = require('./api/getBankAccounts');

const router = express.Router();

const basePath = '/bookingAccounts';

router.get(basePath, getBankAccount);

module.exports = router;
