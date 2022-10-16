// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer

const path= require("path")


//const upload = multer({ dest: './public' })
//--------------CONTROLADOR----------------------------------
const productosController = require("../controllers/productosControllers");

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});
const uploadFile = multer({storage: multerDiskStorage});


//----------------RUTAS------------------------------------
router.get("/", productosController.index);
router.get("/carritoProducto", productosController.sold);

router.get("/ingresarProducto", productosController.ingresar);
router.get("/ingresarProducto", uploadFile.single("imageProduct") ,productosController.ingresar);
router.get("/detalleProducto", productosController.detalle);

router.get("/productos/:id?", function(req,res) {
    req.params.id
});



//-----------EXPORTAR MODULO---------------------------
module.exports = router;
