const controladorUsuarios = require("../controllers/usersControllers");
const{check}=require("express-validator")
let validateRegister=[]

const express = require("express");
const router = express.Router();
router.get("/registro", controladorUsuarios.registrar);//vista home
router.get("/ingreso", controladorUsuarios.ingreso);
router.post("/registro",controladorUsuarios.registrarUsuario)

module.exports = router;
