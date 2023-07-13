const express = require('express'); 
const router = express.Router();

const SiteController = require("../app/controllers/SiteControllers.js");

router.use('/search',SiteController.search) // về trang search
router.use('/',SiteController.index); // về home

module.exports = router;