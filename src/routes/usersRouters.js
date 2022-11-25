// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const path = require("path");
const { body } = require('express-validator');

//--------------CONTROLADOR----------------------------------
const usersControllers = require("../controllers/usersControllers");
//---------MULTER----//
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });
//-------validaciones----//
const validacionRegistro =[
    body('nombreUser').notEmpty().withMessage("Introduce un nombre valido"),
    body('apellidoUser').notEmpty().withMessage("Introduce un apellido valido"),
    body('emailUser').notEmpty().withMessage("introduce un mail valido").bail().isEmail().withMessage("debes completar el mail"),
    body('contrasenaUser').notEmpty().withMessage("introducion contraseña valido").bail().isLength({min: 8}).withMessage("minimo de ocho caracteres"),
]
//----------------RUTAS------------------------------------
/***LOGIN AND CREATE USER ***/
router.get("/registro", usersControllers.login);
router.post("/registro", uploadFile.single('imagenUser'),validacionRegistro, usersControllers.crearUsuario);
router.get("/acesso",usersControllers.acceso);
router.post("/acesso",usersControllers.acceso);
//-----------EXPORTAR MODULO---------------------------
module.exports = router;
