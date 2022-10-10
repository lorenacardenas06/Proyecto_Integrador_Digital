//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path')
//----------------DATOS DEL JSON----------------------------------------
const productosFilePath = path.join(__dirname,'../database/productos.json');
const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = {
  index: (req, res) => {
    res.render("home",{productos:products}); //mostrar pagina de inicio
  }, 
  
  detalle: (req, res) => {
//   console.log(productos)
    res.render("products/detalleProducto"); //mostrar detalle de un producto
  }, 
  carro: (req, res) => {
    res.render("products/carritoProducto"); //mostrar carrito
  }, 
  crearProducto: (req, res) => {
    res.render("products/ingresarProducto"); //mostrar creacion producto
    
  }, 
};

module.exports = controladorProductos;
