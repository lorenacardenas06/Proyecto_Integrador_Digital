//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path')
//----------------DATOS DEL JSON----------------------------------------
const productosFilePath = path.join(__dirname,'../database/productos.json');
const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = {
  index: (req, res) => {
    let productosHome = products.filter(productos=>productos.id%2==0)
    res.render("home",{productos:productosHome}); //mostrar pagina de inicio
  },
  cuidadopersonal: (req, res) => {
    let productosCuidadoPersonal = products.filter(productos=>productos.categoria=="cuidado personal")
    res.render("./products/cuidadoPersonalProducto",{productos:productosCuidadoPersonal}); //mostrar pagina cuidado personal
  },
  maquillaje: (req, res) => {
    let productosMaquillaje = products.filter(productos=>productos.categoria=="maquillaje")
    res.render("./products/maquillajeProducto",{productos:productosMaquillaje}); //mostrar pagina de inicio
  },
  fragancia: (req, res) => {
    let productosFragancia = products.filter(productos=>productos.categoria=="fragancias")
    res.render("./products/fraganciaProducto",{productos:productosFragancia}); //mostrar pagina de inicio
  },
  electrico: (req, res) => {
    let productosElectrico = products.filter(productos=>productos.categoria=="electricos")
    res.render("./products/electricoProducto",{productos:productosElectrico}); //mostrar pagina de inicio
  }
}
  /*
  crearProducto: (req, res) => {
//   console.log(productos)
    res.render("products/detalleProducto",{p:productosFilePath}); //mostrar detalle de un producto
  }, 
  carro: (req, res) => {
    res.render("products/carritoProducto"); //mostrar carrito
  }, 
  almacenar: (req, res) => {
    console.log(req.file);
    //res.render("products/detalleProducto",{p:productosFilePath}); //mostrar detalle de un producto
  },

}

*/

module.exports = controladorProductos;
