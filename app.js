const express = require("express"); //Traigo la libreria express
const path = require("path");

const app = express(); //Utilizo express
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.set("views", path.join(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas

app.set("view engine", "ejs")
const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador
app.use("/", productsRouter); //home
app.use("/login", usersRouters); //login


app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
});