//----------REQUERIMIENTOS-------------------------------------
const express = require("express"); //Traigo la libreria express
const app = express(); //Utilizo express
const path = require("path"); //traigo path
//-------------DIRECCIONES DE CARPETAS-------------------------------------------------------
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.set("views", path.join(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas
app.set("view engine", "ejs");
//----------------METODOS------------------------------------------------
app.use(express.urlencoded({extended:false})); // utilizar el metodo POST
app.use(express.json()); // utilizar el mtodo post
const methodOverride = require('method-override'); //utilizar el metodo put y delete 
app.use(methodOverride('_method')); //utilizar el metodo put y delete 
//-------------------------RUTAS------------------------------------------------------
const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador
app.use("/", productsRouter); // ruta global de productos
app.use("/login", usersRouters); //ruta global para usuarios
//-------------------SE CARGA EL PUERTO-------------------------------------------------
app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
});
