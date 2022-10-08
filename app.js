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
<<<<<<< HEAD
app.use("/ingreso", usersRouters); //singIN
app.use("/productDetail", productsRouter); 
app.use("/shoppingCar", productsRouter); 
=======
>>>>>>> refs/remotes/origin/main


app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
<<<<<<< HEAD
});

/*
app.get('/login', (req,res) =>{
     res.sendFile(path.join(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
 });

app.get('/productDetail', (req,res) =>{
     res.sendFile(path.join(__dirname, './views/productDetail.html'));  // Permite enviar un archivo HTML
 });

app.get("*", (req, res) => {
  res.send("Ruta restringida, hemos localizado la direccion de su computador"); // Permite enviar texto o codigo HTML
});




app.get('/home', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/shoppingCar', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/shoppingCar.html'));  // Permite enviar un archivo HTML
});
*/


=======
});
>>>>>>> refs/remotes/origin/main
