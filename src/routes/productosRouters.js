// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const path= require("path");

//const upload = multer({ dest: './public' })
//--------------CONTROLADOR----------------------------------
const productosController = require("../controllers/productosControllers");
/*
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});*/
//const uploadFile = multer({storage: multerDiskStorage});


//----------------RUTAS------------------------------------
/***GET ALL PRODUCTS***/
router.get("/", productosController.index);
router.get("/cuidadoPersonal", productosController.cuidadopersonal);
router.get("/maquillaje", productosController.maquillaje);
router.get("/fragancias", productosController.fragancia);
router.get("/electricos", productosController.electrico);
/***GET ONE PRODUCT ***/
//router.get("/carritoProducto/", productosController.carro);

//router.get("/ingresarProducto", productosController.ingresar);
//router.get("/ingresarProducto", uploadFile.single("imageProduct") ,productosController.ingresar);
/***CREATE ONE PRODUCT ***/
//router.get("/detalleProducto", productosController.crearProducto);
//router.post("/detalleProducto", uploadFile.single("cImage"),productosController.almacenar);

//router.get("/productos/:id?", function(req,res) {
//    req.params.id
//});



//-----------EXPORTAR MODULO---------------------------
module.exports = router;
