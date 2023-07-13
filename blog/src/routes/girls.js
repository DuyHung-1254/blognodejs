const express = require('express'); 
const router = express.Router();

const newController = require("../app/controllers/GirlsControllers.js");

router.use('/manyGirls',newController.girls);

router.use('/',newController.girl);



module.exports = router;