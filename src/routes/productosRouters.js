const productosController = require("../controllers/productosControllers");

const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const upload = multer({ dest: './public' })
router.get("/", productosController.index);
router.get("/detalleProducto", productosController.detalle);
router.get("/carritoProducto", productosController.carro);

router.get("/productos/:id?", function(req,res) {
    req.params.id
});


module.exports = router;
