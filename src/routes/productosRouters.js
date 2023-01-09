/* REQUERIMIENTOS */

const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosControllers");
const multer = require("multer"); //multer
const path = require("path");
const authMiddleware = require("../middlewares/authMiddleware.js");
const { body } = require("express-validator");

//---------MULTER------------------------------------

const multerDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // request, archivo y callback que almacena archivo en destino
    cb(null, path.join(__dirname, "../../public/img/products")); // Ruta donde almacenamos el archivo
  },
  filename: function (req, file, cb) {
    // request, archivo y callback que almacena archivo en destino
    let imageName = Date.now() + path.extname(file.originalname); // milisegundos y extensión de archivo original
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage: multerDiskStorage });

//----------------RUTAS------------------------------------

/***MOSTRAR PRODUCTOS***/
router.get("/", productosController.index);
router.get("/cuidadoPersonal", productosController.cuidadopersonal);
router.get("/maquillaje", productosController.maquillaje);
router.get("/fragancias", productosController.fragancia);
router.get("/electricos", productosController.electrico);

/***CREATE ALL PRODUCTS***/
router.get("/crearProducto", productosController.crearProducto);
router.post(
  "/crearProducto",
  uploadFile.single("imagen"),
  productosController.store
);

/***GET ONE PRODUCT ***/
router.get("/detalleProducto/:id", productosController.detalleProducto);

/***EDIT ONE PRODUCT ***/
router.get("/editarProducto/:id", productosController.editarProducto);
router.put(
  "/editarProducto/:id",
  uploadFile.single("imagen"),
  productosController.actualizarProducto
);

/***DELETE ONE PRODUCT ***/
router.delete("/:id", productosController.eliminarProducto);

/**BUY PRODUCTOS */
router.get("/carritoProducto", productosController.carritoProducto);

/*** Consultas API***/
// router.get("/consultaProductos", productosController.consultaProducto);
// router.get("/consultaCategorias", productosController.consultaCategoria);

//-----------EXPORTAR MODULO---------------------------
module.exports = router;

// //----------VALIDACIONES ----------------
// const validacionesProducto = [
//     body('name').notEmpty().withMessage('Campo vacio').bail(),
//     /* body('marca').notEmpty().withMessage('Campo vacio').bail,
//     body('precio').notEmpty().withMessage('Campo vacio').bail(),
//     body('descripcion').notEmpty().withMessage('Campo vacio').bail(),
//         body("imagenUser").custom((value,{req}) => {
//           let imagenUsuario = req.file;
//           let imagenExtensiones = ['.jpg','.png', '.gif'];
//           return true;})
//     */
// ];
