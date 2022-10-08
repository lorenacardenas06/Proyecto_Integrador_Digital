const controladorUsuarios = require("../controllers/usersControllers");
const{check}=require("express-validator")
let validateRegister=[]

const express = require("express");
const router = express.Router();
router.get("/registro", controladorUsuarios.registrar);//vista home
router.post("/registro",controladorUsuarios.registrarUsuario)
router.get("/ingreso", controladorUsuarios.ingreso);
router.get("/perfil", controladorUsuarios.perfil);


module.exports = router;
