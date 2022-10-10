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
    res.render("products/detalleProducto",{p:productos});
  }, //mostrar detalle de un producto
  sold: (req, res) => {
    res.render("products/carritoProducto");
  }, //enviar datos para agregar un producto

    
  ingresar: (req, res) => {
    console.log(req.file)
    //res.render("products/detalleProducto",{p:productosFilePath}); //mostrar detalle de un producto
  },
  detalle: (req, res) => {
    res.render("products/detalleProducto",{p:productosFilePath}); //mostrar detalle de un producto
  },

}



module.exports = controladorProductos;
