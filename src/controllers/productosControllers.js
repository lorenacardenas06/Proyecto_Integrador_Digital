const controladorProductos = {
  index: (req, res) => {
    let dir = __dirname;
    console.log(dir);
    //res.sendFile(__dirname,"../views/home.html");
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
