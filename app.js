const express = require("express"); //Traigo la libreria express
const app = express(); //Utilizo express
const path = require("path"); //traigo path

app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public

const methodOverride=require("method-override")
const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador
app.use(express.urlencoded({extended:false})) //utilizar el metodo POST
app.use(methodOverride("_method"))
app.set("views", path.join(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas

app.set("view engine", "ejs")

app.use("/", productsRouter); //home
app.use("/login", usersRouters); //login


app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
});
