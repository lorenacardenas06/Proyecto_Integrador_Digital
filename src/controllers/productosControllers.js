const controladorProductos = {
  index: (req, res) => {
    res.sendFile(__dirname, "../views/home.html");
  }, //mostrar listado de productos
  show: (req, res) => {
    res.sendFile(__dirname, "../views/productDetail.html");
  }, //mostrar detalle de un producto
  create: (req, res) => {
    res.sendFile(__dirname, "../views/shoppingCar.html");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
