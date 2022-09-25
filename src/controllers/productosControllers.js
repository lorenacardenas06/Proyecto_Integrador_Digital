const controladorProductos = {
  index: (req, res) => {
    let dir = __dirname;
    console.log(dir);
    //res.sendFile(__dirname,"../views/home.html");
    res.render("home");
  }, //mostrar listado de productos
  show: (req, res) => {
    res.sendFile(__dirname, "../views/productDetail.html");
  }, //mostrar detalle de un producto
  create: (req, res) => {
    res.sendFile(__dirname, "../views/shoppingCar.html");
  }, //enviar datos para agregar un producto
};

module.exports = controladorProductos;
