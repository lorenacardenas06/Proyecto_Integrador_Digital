const express = require("express"); //Traigo la libreria express
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express(); //Utilizo express
app.set("views", path.join(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas
// app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
// app.use(express.urlencoded({ extended: false }));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(cookieParser());
app.set("view engine", "ejs");
const productsRouter = require("./src/routes/productosRouters");
const usersRouters = require("./src/routes/usersRouters"); // Se hace la carpeta public publica
app.use("/", productsRouter); //home
app.use("/login", usersRouters); //login

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});

// app.get('/login', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
// });

// app.get('/productDetail', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/productDetail.html'));  // Permite enviar un archivo HTML
// });

app.get('/shoppingCar', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/shoppingCar.html'));  // Permite enviar un archivo HTML
});

//app.get("*", (req, res) => {
//res.send("Ruta restringida, hemos localizado la direccion de su computador"); // Permite enviar texto o codigo HTML
//});

app.listen(3002, () => {
console.log("Servidor corriendo");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo");
});