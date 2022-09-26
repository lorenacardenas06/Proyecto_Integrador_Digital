const controladorUsuarios = require("../controllers/usersControllers");

const express = require("express");
const router = express.Router();
router.get("/", controladorUsuarios.registrar);

module.exports = router;
