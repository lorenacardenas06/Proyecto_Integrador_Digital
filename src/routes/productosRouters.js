const productosController = require("../controllers/productosControllers");

const express = require("express");
const router = express.Router();
router.get("/", productosController.index);
router.get("/productDetail", productosController.show);
router.get("/shoppingCar", productosController.create);

router.get("/productos/:id?", function(req,res) {
    req.params.id
});


module.exports = router;
