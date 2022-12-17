// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const path= require("path");
const {check, body} = require('express-validator/check');


//--------------CONTROLADOR----------------------------------
const productosController = require("../controllers/productosControllers");

//-multer
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

//----------VALIDACIONES ----------------
const validacionesProduct = [
    body('name').notEmpty().withMessage('Campo vacio'),
    body('marca').notEmpty().withMessage('Campo vacio'),
    body('precio').notEmpty().withMessage('Campo vacio'),
    body('descripcion').notEmpty().withMessage('Campo vacio'),
        body("imagenUser").custom((value,{req}) => {
          let imagenUsuario = req.file;
          let imagenExtensiones = ['.jpg','.png', '.gif'];
          return true;})
];
//----------------RUTAS------------------------------------

/***GET ALL PRODUCTS***/
router.get("/", productosController.index);
router.get("/cuidadoPersonal", productosController.cuidadopersonal);
router.get("/maquillaje", productosController.maquillaje);
router.get("/fragancias", productosController.fragancia);
router.get("/electricos", productosController.electrico);

/**BUY PRODUCTOS */
router.get("/carritoProducto", productosController.carritoProducto);

/***CREATE ALL PRODUCTS***/
router.get("/crearProducto", productosController.crearProducto);
//router.post("/crearProducto",validaciones, uploadFile.single('imagen'), productosController.store);

/***GET ONE PRODUCT ***/
router.get("/detalleProducto/:id", productosController.detalleProducto);

/***EDIT ONE PRODUCT ***/
router.get("/editarProducto/:id", productosController.editarProducto);
router.put("/editarProducto/:id",uploadFile.single('imagen'), productosController.actualizarProducto);

/***DELETE ONE PRODUCT ***/
router.delete("/:id", productosController.eliminarProducto);


//-----------EXPORTAR MODULO---------------------------
module.exports = router;
