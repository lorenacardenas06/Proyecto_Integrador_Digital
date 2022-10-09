// ------------REQUERIMIENTOS-----------------------
const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const upload = multer({ dest: './public' })
//--------------CONTROLADOR----------------------------------
const productosController = require("../controllers/productosControllers");

//----------------RUTAS------------------------------------
router.get("/", productosController.index);
router.get("/detalleProducto", productosController.detalle);
router.get("/carritoProducto", productosController.carro);
<<<<<<< HEAD
=======
router.get("/crearProducto", productosController.crearProducto);

>>>>>>> 6c2c0c67f752c14260dae377a3ccb8a7041d8b82
router.get("/productos/:id?", function(req,res) {
    req.params.id
});
router.get("/ingresarProduc", productosController.nuevos)


//-----------EXPORTAR MODULO---------------------------
module.exports = router;
