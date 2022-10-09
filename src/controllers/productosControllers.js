//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path')
//----------------DATOS DEL JSON----------------------------------------
const productosFilePath = path.join(__dirname,'../database/productos.json');
const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = {
  index: (req, res) => {
    res.render("home"); //mostrar pagina de inicio
  }, 
  
  detalle: (req, res) => {
//   console.log(productos)
    res.render("products/detalleProducto",{p:productosFilePath}); //mostrar detalle de un producto
  }, 
  carro: (req, res) => {
<<<<<<< HEAD
    res.render("products/carritoProducto");
  }, //mostrar carrito
  nuevos: (req, res) => {
    res.render("products/ingresarProduc");
  }, //mostrar nuevos
=======
    res.render("products/carritoProducto"); //mostrar carrito
  }, 
  crearProducto: (req, res) => {
    res.render("products/ingresarProducto"); //mostrar creacion producto
    
  }, 
>>>>>>> 6c2c0c67f752c14260dae377a3ccb8a7041d8b82
};

module.exports = controladorProductos;
