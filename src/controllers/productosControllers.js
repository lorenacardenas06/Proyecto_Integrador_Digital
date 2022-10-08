const productos=require("../database/base.json")
const controladorProductos = {
  index: (req, res) => {

    res.render("home");
  }, //mostrar listado de productos
  show: (req, res) => {
//   console.log(productos)
    res.render("productDetail",{p:productos});
  }, //mostrar detalle de un producto
  create: (req, res) => {
    res.render("views/products/shoppingCar");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
