//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
//----------------DATOS DEL JSON----------------------------------------
const usuariosFilePath = path.join(__dirname,'../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usuariosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorUsuarios = {
  login: (req, res) => {
    res.render("./users/registro");
  }, //registar usuario
  crearUsuario: (req, res) => {
    const errores = validationResult(req);
    let datosUsuario = req.body;
    if(errores.isEmpty()){
      let datosUsuario = req.body;
      let idNuevoUsuario = (users[users.length-1].id) + 1;
      let nuevoUsuario =
      {
        "id": idNuevoUsuario,
        "nombre": datosUsuario.nombreUser,
        "apellidos": datosUsuario.apellidoUser,
        "email": datosUsuario.emailUser,
        "contrasena": datosUsuario.contrasenaUser,
        "categoria": datosUsuario.categoriaUser,
        "imagenUsuario": "/img/users/"+req.file.filename,
      };
      users.push(nuevoUsuario);
      fs.writeFileSync(usuariosFilePath,JSON.stringify(users,null," "),'utf-8');
      res.redirect('./users/perfil');
  }else{
    res.render('./users/registro',{ errores : errores.mapped(), datosUsuarioViejo: req.body });
  }
}
}
//-------------------database----------------///

let db = require("../database/models");
let usuariosController={
    crear: function(req,res){
        db.usuario.findAll()
        .then (function(usuario){
            return res.render("registro",{usuario:registro})
        })
    }
  };
  db.usuario.create({
    guardado: function (req,res) {
      id: req.body.idNuevoUsuario;
      nombre:  req.body.datosUsuario.nombreUser;
      apellidos: req.body.datosUsuario.apellidoUser;
      email: req.body.datosUsuario.emailUser;
      contrasena: req.body.datosUsuario.contrasenaUser;
      categoria: req.body.datosUsuario.categoriaUser;
      imagenUsuario: "/img/users/"+req.file.filename;
  });
  res.redirect('./users/perfil');
  let local=db.usuario.findByPK(req.params.id);
 //------------EXPORTAR MODULO CONTROLADOR USUARIOS------------------
module.exports = controladorUsuarios;
