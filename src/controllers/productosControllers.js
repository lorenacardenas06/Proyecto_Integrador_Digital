//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');

//----------------DATOS DEL JSON----------------------------------------
const productosFilePath = path.join(__dirname,'../data/productos.json');
const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorProductos = {
  index: (req, res) => {
    //const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
    let productosHome = products.filter(productos=>productos.id%2==0)
    //req.session.nombre="Lápiz labial"
    res.cookie("producto","fsd");
    //console.log(req.cookie.producto);
    //res.cookie.dni();

    res.render("home",{productos:productosHome}); //mostrar pagina de inicio
  },
  cuidadopersonal: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
    let productosCuidadoPersonal = products.filter(productos=>productos.categoria=="cuidado personal")
    res.render("./products/cuidadoPersonalProducto",{productos:productosCuidadoPersonal}); //mostrar pagina cuidado personal
  },
  maquillaje: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
    let productosMaquillaje = products.filter(productos=>productos.categoria=="maquillaje")
    res.render("./products/maquillajeProducto",{productos:productosMaquillaje}); //mostrar pagina maquillaje
  },
  fragancia: (req, res) => {
    let productosFragancia = products.filter(productos=>productos.categoria=="fragancias")
    res.render("./products/fraganciaProducto",{productos:productosFragancia}); //mostrar pagina de fragancias
  },
  electrico: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
    let productosElectrico = products.filter(productos=>productos.categoria=="electricos")
    res.render("./products/electricoProducto",{productos:productosElectrico}); //mostrar pagina de electricos
  },

  carritoProducto: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productosFilePath,'utf-8'));
    res.render("./products/carritoProducto"); //mostrar pagina maquillaje
  },

  crearProducto: (req, res) => {
    let passEncriptada=bcrypt.hashSync("Marcelo",10);
    console.log(passEncriptada);
    res.render("./products/crearProducto"); //mostrar pagina de crear producto

  },

  store:(req, res) => {
    let errors = validationResult(req);

		if ( errors.isEmpty() ) {

			idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;
    if(req.file){
      let datos = req.body;
      let idNuevoProducto = (products[products.length-1].id) + 1;
      let nuevoProducto =
      {
        "id": idNuevoProducto,
        "categoria": datos.categoria,
        "nombre": datos.nombre,
        "marca": datos.marca,
        "precio": parseInt(datos.precio),
        "descripción": datos.descripcion,
        "imagen": "/img/products/"+req.file.filename,
        "descuento": parseInt(datos.descuento)
      };
      products.push(nuevoProducto);
      fs.writeFileSync(productosFilePath,JSON.stringify(products,null," "),'utf-8');
      res.redirect('/');
    }else{
      res.render("/crearProducto",{errors:errors.array()});
    }
   
  }},

  detalleProducto: (req,res) =>{
    let idProducto = req.params.id;
    let productoBuscado=0;
    for (let o of products){
      if (o.id == idProducto){
        productoBuscado = o;
        break; 
      }
    }
    if(productoBuscado!=0){
      res.render("./products/detalleProducto", {productos:productoBuscado})
    }else{
      res.send("Producto no encontrado");
    }
  },

  editarProducto: (req,res) =>{
    
    let idProducto = req.params.id;
    let productoBuscado=0;
    for (let o of products){
      if (o.id == idProducto){
        productoBuscado = o;
        break; 
      }
    }
    if(productoBuscado!=0){
      res.render("./products/editarProducto", {productos:productoBuscado})
    }else{
      res.send("Producto no encontrado");
    }
  },

  actualizarProducto: (req,res) =>{

    let idProducto = req.params.id;
    let datosProducto = req.body;
    let nombreImagenAntigua ="";
    for (let o of products){
      if (o.id == idProducto){
        nombreImagenAntigua = o.imagen;
        o.nombre = datosProducto.nombre;
        o.marca = datosProducto.marca;
        o.precio = parseInt(datosProducto.precio);
        o.descripcion = datosProducto.descripcion;
        o.imagen = `/img/products/${req.file.filename}`;
        o.descuento = parseInt(datosProducto.descuento);
        break; 
      }
    }  
    fs.writeFileSync(productosFilePath,JSON.stringify(products,null," "),'utf-8');
    fs.unlinkSync(__dirname + '/../../public' + nombreImagenAntigua);
    res.redirect("/");
  },
  eliminarProducto: (req,res) =>{
    let idProducto = req.params.id;
    let nombreImagenAntigua ="";
    for (let o of products){
      if (o.id == idProducto){
        nombreImagenAntigua = o.imagen;
        break; 
      }
    }  
    let nuevosProductos =  products.filter(function(e){
      return e.id!=idProducto;
    });
    fs.writeFileSync(productosFilePath,JSON.stringify(nuevosProductos,null," "),'utf-8');
    fs.unlinkSync(__dirname + '/../../public' + nombreImagenAntigua);
    res.redirect("/");
  }
}
 //------------EXPORTAR MODULO CONTROLADOR PRODUCTOS------------------
module.exports = controladorProductos;
