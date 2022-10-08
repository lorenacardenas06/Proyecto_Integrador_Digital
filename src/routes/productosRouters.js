const productosController = require("../controllers/productosControllers");

const express = require("express");
const router = express.Router();
const multer  = require('multer'); //multer
const upload = multer({ dest: './public' })
router.get("/", productosController.index);
router.get("/productDetail", productosController.show);
router.get("/shoppingCar", productosController.show);

router.get("/productos/:id?", function(req,res) {
    req.params.id
});


module.exports = router;
