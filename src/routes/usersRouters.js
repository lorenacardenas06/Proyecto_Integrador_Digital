const controladorUsuarios = require("../controllers/usersControllers");


const express = require("express");
const router = express.Router();
router.post("/registro",controladorUsuarios.registrar)
router.get("/ingreso", controladorUsuarios.ingreso);
router.get("/perfil", controladorUsuarios.perfil);


module.exports = router;
