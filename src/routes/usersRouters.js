// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");
const multer  = require('multer'); //multer
const path = require("path");
const { body } = require('express-validator');
const { string } = require("i/lib/util");
//---------MULTER------------------------------------
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});
const fileFilter = (req, file, cb) => {
  if ((file.mimetype),includes('gif')|| (file.mimetype) .includes('png') || (file.mimetype).includes('jpg')) {
     cb(null, true);
 } else {                                      I
     //cb(new multer.MulterError('not a PNG'), false);
     cb(null, false);
     return cb(new Error('No es -una imagen'));}}

const uploadFile = multer({ storage: multerDiskStorage });
//----------------RUTAS------------------------------------
/***LOGIN AND CREATE USER ***/
/***Mostrar pagina de registro ***/
router.get("/registro",usersControllers.usuarioRegistro);
/*** Crear Usuario ***/
router.post("/registro", uploadFile.single('imagen'),usersControllers.crearUsuario);
/*** Mostrar pagina de login***/
router.get("/login",usersControllers.login);
/*** Autenticación del login***/
router.post("/login", usersControllers.procesoLogin);
/*** Mostrar perfil de usuario***/
router.get("/perfil/:id",usersControllers.perfil);
/*** Editar el perfil de usuario***/
router.get("/editarPerfil/:id",usersControllers.editarPerfil);
router.put("/editarPerfil/:id", uploadFile.single('imagen'), usersControllers.actualizarPerfil);
/*** Consulta usuarios***/
router.get("/consultaUsuario", usersControllers.consultaUsuario)
//-----------EXPORTAR MODULO---------------------------
module.exports = router;


// //const validacionRegistro =[
//  body('nombre').notEmpty().withMessage("Introduce un nombre valido").bail(),
//  body('apellido').notEmpty().withMessage("Introduce un apellido valido").bail(),
//  body('email').notEmpty().withMessage("Introduce un email valido").bail().isEmail().withMessage("debes completar el mail"),
//  body('contrasena').notEmpty().withMessage("introducion contraseña valido").bail().isLength({min: 8}).withMessage("minimo de ocho caracteres"),
//  body("imagen").custom((value,{req}) => {
//     let imagenUsuario = req.file;
//     let imagenExtensiones = ['.jpg','.png', '.gif'];
//     return true;
//     /*
//     if (imagenUsuario ==false){
//       throw new Error("Suba un archivo de imagen");
//     }else{
//       let imagenExtension = path.extname(file.originalname);
//       if (!imagenExtensiones.includes(imagenExtension)){
//         throw new Error('La extension de la imagen no es permitida.')
//       }
//     }
//     return true;})
//     */
   
//   })
// ]
// const validacionLogin =[
//   body('email').notEmpty().withMessage("introduce un mail valido").bail().isEmail().withMessage("debes completar el mail"),
//   body('contrasena').notEmpty().withMessage("introducion contraseña valido").bail().isLength({min: 8}).withMessage("minimo de ocho caracteres"),
// ]