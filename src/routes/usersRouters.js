// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const path = require("path");
const { check } = require('express-validator');

//--------------CONTROLADOR----------------------------------
const usersControllers = require("../controllers/usersControllers");

//----------------RUTAS------------------------------------
/***LOGIN USER ***/
router.get("/login", usersControllers.login);

//-----------EXPORTAR MODULO---------------------------
module.exports = router;
