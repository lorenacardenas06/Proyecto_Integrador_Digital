// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const path = require("path");
const { check } = require('express-validator');

//--------------CONTROLADOR----------------------------------
const usersControllers = require("../controllers/usersControllers");
//---------MULTER----//
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/user'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });
//-------validaciones----//
const validacionLogin =[
    check("nombre")
     .notEmpty().withMessage("introduce nombre valido").bail(),
    check("apellido")
    .notEmpty().withMessage("introduce apellido valido").bail(),
    check("email")
    .notEmpty().withMessage("introduce un mail valido").bail()
    .isEmail().withMessage("debes completar el mail"),
    check("contrasena")
    .notEmpty().withMessage("introducion contraseña valido").bail()
    .isLength({min: 8}).withMessage("minimo de ocho caracteres"),
  ]
//----------------RUTAS------------------------------------
/***LOGIN AND CREATE USER ***/
router.get("/login", usersControllers.login);
router.post("/login",uploadFile.single('imagenuser'), usersControllers.crearUsuario);
//-----------EXPORTAR MODULO---------------------------
module.exports = router;
