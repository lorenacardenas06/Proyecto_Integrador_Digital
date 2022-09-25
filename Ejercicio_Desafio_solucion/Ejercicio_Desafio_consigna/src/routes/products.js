// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
       cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
       cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', uploadFile.single('cImage'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', uploadFile.single('cImage'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
