//------------REQUERIMIENTOS-------------------------
const db = require("../database/models");
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

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
    res.render("./products/carritoProducto");
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
            return res.redirect('/')
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
  },
  //------------ACTUALIZAR PRODUCTO---------------
  actualizarProducto: async (req,res) =>{
    let nuevosDatos = {
      "nombre": req.body.nombre,
      "precio": req.body.precio,
      "descripcion": req.body.descripcion,
      "imagen": "/img/products/"+req.file.filename,
      "fecha_eliminación": req.body.fecha_eliminación,
      "marca_id_FK": req.body.marca,
      "categoria_id_FK": req.body.categoria
    }
    let actualizarProducto = await db.Producto.update(nuevosDatos, {where: {id: req.params.id}});
    res.redirect("/")
  },
  //------------ELIMINAR PRODUCTO---------------
  eliminarProducto: (req,res) =>{
    db.Producto.destroy({where: {id: req.params.id}}).then(function(){
      return res.redirect('/')})
    },
  /* Datos para API USUARIO */
  consultaProducto : async (req, res) => {
      const productos = await db.Producto.findAll()
      res.json(productos)
  },
  consultaCategorias: async (req, res) => {
    const categorias = await db.Categoria.findAll()
    res.json(categorias)
  }
}

 //------------EXPORTAR MODULO CONTROLADOR PRODUCTOS------------------
module.exports = controladorProductos;

//----------------DATOS DEL JSON----------------------------------------
// const productosFilePath = path.join(__dirname,'../data/productos.json');
// const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
