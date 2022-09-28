const controladorProductos = {
  index: (req, res) => {
    res.render("home");
  }, //mostrar listado de productos
  show: (req, res) => {
    res.render("productDetail");
  }, //mostrar detalle de un producto
  create: (req, res) => {
    res.render("shoppingCar");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
