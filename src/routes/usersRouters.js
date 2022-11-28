// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const path = require("path");
const { body, check } = require('express-validator');



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
    body("imagenUser").custom((value,{req}) =>{
      let imagen = req.file;
      let imagenExtensiones = ['.jpg','.png', '.gif'];

      if (!imagen){
        throw new Error("Suba un archivo de imagen");
      }else{
        let imagenExtension = path.extname(file.originalname);
        if (!imagenExtensiones.includes(imagenExtension)){
          throw new Error('La extension de la imagen no es permitida.')
        }
      }
      return true;})
  ]
  const validacionLogin =[
    body('emailLogin').notEmpty().withMessage("introduce un mail valido").bail().isEmail().withMessage("debes completar el mail"),
    body('contrasenaLogin').notEmpty().withMessage("introducion contraseña valido").bail().isLength({min: 8}).withMessage("minimo de ocho caracteres"),
  ]
//----------------RUTAS------------------------------------
/***LOGIN AND CREATE USER ***/
router.get("/registro", usersControllers.registro);
router.post("/registro", uploadFile.single('imagenUser'),validacionRegistro, usersControllers.crearUsuario);
router.get("/login",validacionLogin, usersControllers.login);
router.post("/login",usersControllers.procesoLogin);
//-----------EXPORTAR MODULO---------------------------
module.exports = router;
