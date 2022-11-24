//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path');
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
//----------------DATOS DEL JSON----------------------------------------
const usuariosFilePath = path.join(__dirname,'../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usuariosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorUsuarios = {
  login: (req, res) => {
    res.render("./users/login");
  }, //registar usuario
  crearUsuario: (req, res) => {
    let datosUsuario = req.body;
    let idNuevoUsuario = (users[users.length-1].id) + 1;
    let nuevoUsuario =
    {
      "id": idNuevoUsuario,
      "nombre": datosUsuario.nombre,
      "apellidos": datosUsuario.apellidos,
      "email": datosUsuario.email,
      "contrasena": datosUsuario.contrasena,
      "imagenUsuario": "/img/users/"+req.file.filename,
    };
    users.push(nuevoUsuario);
    fs.writeFileSync(usuariosFilePath,JSON.stringify(users,null," "),'utf-8');
    res.redirect('./users/perfil');
  },
};
 //------------validacion-----//

 validarRegistro: (req,res) => {
  const validacion=check(req);
  
   if (validacion.errors.length >0){
     return res.render("login",{
      errors: validacion.mapped(),
     });
   }
 }
 //------------EXPORTAR MODULO CONTROLADOR USUARIOS------------------
module.exports = controladorUsuarios;
