const controladorUsuarios = require("../controllers/usersControllers");
const{check}=require("express-validator")
let validateRegister=[]

const express = require("express");
const router = express.Router();
router.get("/", controladorUsuarios.registrar);
router.get("/login", controladorUsuarios.ingreso);

module.exports = router;
