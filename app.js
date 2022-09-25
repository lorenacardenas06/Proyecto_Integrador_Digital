const express = require("express"); //Traigo la libreria express

const path = require("path"); //Traigo la ruta

const app = express(); //Utilizo express

const productsRouter = require("./src/routes/productosRouters");
const usersRouters = require("./src/routes/usersRouters");
app.use(express.static(path.join(__dirname, "./public"))); // Se hace la carpeta public publica
app.use("/", productsRouter); //home
app.use("/login", usersRouters); //login

// app.get('/home', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
// });

// app.get('/login', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
// });

// app.get('/productDetail', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/productDetail.html'));  // Permite enviar un archivo HTML
// });

// app.get('/shoppingCar', (req,res) =>{
//     res.sendFile(path.join(__dirname, './views/shoppingCar.html'));  // Permite enviar un archivo HTML
// });

//app.get("*", (req, res) => {
//res.send("Ruta restringida, hemos localizado la direccion de su computador"); // Permite enviar texto o codigo HTML
//});
app.set("views", path.join(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas

//app.listen(3000, () => {
//  console.log("Servidor corriendo");
//});

app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
});
