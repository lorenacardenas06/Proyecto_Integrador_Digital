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
router.get("/crearProducto", productosController.crearProducto);

router.get("/productos/:id?", function(req,res) {
    req.params.id
});

//-----------EXPORTAR MODULO---------------------------
module.exports = router;
