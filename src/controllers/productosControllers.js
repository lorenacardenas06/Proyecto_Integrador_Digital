const productos=require("../database/base.json")
const controladorProductos = {
  index: (req, res) => {

    res.render("home",{p:productos});
  }, //mostrar listado de productos
  show: (req, res) => {
    res.render("productDetail");
  }, //mostrar detalle de un producto
  create: (req, res) => {
    res.render("shoppingCar");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
