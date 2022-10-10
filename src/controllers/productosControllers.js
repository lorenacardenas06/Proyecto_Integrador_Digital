const productos=require("../database/productos.json")
const controladorProductos = {
  index: (req, res) => {
    res.render("home");
  }, //mostrar listado de productos
  show: (req, res) => {
//   console.log(productos)
    res.render("products/detalleProducto",{p:productos});
  }, //mostrar detalle de un producto
  sold: (req, res) => {
    res.render("products/carritoProducto");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
