const express= require('express');
const router= express.Router();
const {home} = require('../controllers/mincontroller');


router.get('/',home)
module.exports= router;