//------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

//------------IMPORTO MODELOS-------------------------
const db = require("../database/models");

//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = 
{
//------------MOSTRAR PAGINA PRINCIPAL---------------
  index: (req, res) =>{
    db.Producto.findAll().then(function(producto){
      res.render("home",{producto:producto})
    })},
//------------MOSTRAR PAGINA CUIDADO PERSONAL---------------
  cuidadopersonal: (req, res) => {
    db.Producto.findAll({where: {categoria_id_FK: 1}}).then(function(producto){
      res.render("./products/cuidadoPersonalProducto",{producto:producto})
    })},
//------------MOSTRAR PAGINA MAQUILLAJE---------------
  maquillaje: (req, res) => {
    db.Producto.findAll({where: {categoria_id_FK: 2}}).then(function(producto){
      res.render("./products/maquillajeProducto",{producto:producto})
    })},
//------------MOSTRAR PAGINA FRAGANCIAS---------------
  fragancia: (req, res) => {
    db.Producto.findAll({where: {categoria_id_FK: 3}}).then(function(producto){
      res.render("./products/fraganciaProducto",{producto:producto})
    })},
//------------MOSTRAR PAGINA ELECTRICOS---------------
  electrico: (req, res) => {
    db.Producto.findAll({where: {categoria_id_FK: 4}}).then(function(producto){
      res.render("./products/electricoProducto",{producto:producto})
    })},
//------------MOSTRAR PAGINA DETALLE DE PRODUCTO---------------
  detalleProducto: async (req,res) =>{
    let producto = await db.Producto.findOne({where: {id: req.params.id}}).then(function(producto){
        if(producto){
          console.log("Producto encontrado");
          res.render("./products/detalleProducto", {producto : producto})
        }else{
          res.send("Producto no encontrado");
        }
      })
  },
//------------MOSTRAR PAGINA CARRITO DE COMPRAS---------------
  carritoProducto: (req, res) => {
    res.render("./products/carritoProducto"); //mostrar pagina maquillaje
  },
//------------MOSTRAR PAGINA CREAR PRODUCTO---------------
  crearProducto: async (req, res) => {
    let categoria = await db.Categoria.findAll()
    let marca = await db.Marca.findAll()
    res.render("./products/crearProducto",{c:categoria, m:marca}); 
  },
//------------PROCESO CREAR PRODUCTO---------------
  store:(req, res) => {
    // const errores = validationResult(req);
    if (true) 
    {
      db.Producto.findOne({where: {nombre: req.body.nombre}}).then(function(producto)
      {
        if (producto)
        {
          console.log("El producto ya existe")
          return res.render('./products/crearProducto')
        }else{
          let productoNuevo = 
            {
              "nombre": req.body.nombre,
              "precio": req.body.precio,
              "descripcion": req.body.descripcion,
              "imagen": "/img/products/"+req.file.filename,
              "fecha_eliminación": req.body.fecha_eliminación,
              "marca_id_FK": req.body.marca,
              "categoria_id_FK": req.body.categoria
            }
          db.Producto.create(productoNuevo).then(function(producto)
          {
            return res.render('/')
          })
        }
      })
    }else{
     // res.render("/crearProducto",{errores : errores.array()});;
    }
  },
//------------MOSTRAR PAGINA EDITAR PRODUCTO---------------
  editarProducto: async (req,res) =>{
    let categoria = await db.Categoria.findAll()
    let marca = await db.Marca.findAll()
    let producto = await db.Producto.findOne({where: {id: req.params.id}}).then(function(producto){
      if(producto){
        console.log("Producto encontrado");
        res.render("./products/editarProducto", {producto : producto, c:categoria, m:marca})
      }else{
        res.send("Producto no encontrado");
      }
    })
  }
}
  // actualizarProducto: (req,res) =>{

  //   let idProducto = req.params.id;
  //   let datosProducto = req.body;
  //   let nombreImagenAntigua ="";
  //   for (let o of products){
  //     if (o.id == idProducto){
  //       nombreImagenAntigua = o.imagen;
  //       o.nombre = datosProducto.nombre;
  //       o.marca = datosProducto.marca;
  //       o.precio = parseInt(datosProducto.precio);
  //       o.descripcion = datosProducto.descripcion;
  //       o.imagen = `/img/products/${req.file.filename}`;
  //       o.descuento = parseInt(datosProducto.descuento);
  //       break; 
  //     }
  //   }  
  //   fs.writeFileSync(productosFilePath,JSON.stringify(products,null," "),'utf-8');
  //   fs.unlinkSync(__dirname + '/../../public' + nombreImagenAntigua);
  //   res.redirect("/");
  // },
  // eliminarProducto: (req,res) =>{
  //   let idProducto = req.params.id;
  //   let nombreImagenAntigua ="";
  //   for (let o of products){
  //     if (o.id == idProducto){
  //       nombreImagenAntigua = o.imagen;
  //       break; 
  //     }
  //   }  
  //   let nuevosProductos =  products.filter(function(e){
  //     return e.id!=idProducto;
  //   });
  //   fs.writeFileSync(productosFilePath,JSON.stringify(nuevosProductos,null," "),'utf-8');
  //   fs.unlinkSync(__dirname + '/../../public' + nombreImagenAntigua);
  //   res.redirect("/");
  // }

 //------------EXPORTAR MODULO CONTROLADOR PRODUCTOS------------------
module.exports = controladorProductos;

//----------------DATOS DEL JSON----------------------------------------
// const productosFilePath = path.join(__dirname,'../data/productos.json');
// const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
