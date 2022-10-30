//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path')
//----------------DATOS DEL JSON----------------------------------------
const usuariosFilePath = path.join(__dirname,'../database/usuarios.json');
const users = JSON.parse(fs.readFileSync(usuariosFilePath,'utf-8'));
//------------OBJETO DEL CONTROLADOR------------------
const controladorUsuarios = {
  login: (req, res) => {
    res.render("./users/login");
  }, //registar usuario
};
 //------------EXPORTAR MODULO CONTROLADOR USUARIOS------------------
module.exports = controladorUsuarios;
/*
ingreso:(req, res)=> {
  res.render("./users/ingreso");
},//inicio de sesion
perfil:(req, res)=> {
  res.render("./users/perfil");
},//perfil usuario
registrarUsuario:(req, res)=> { 
  let datos=req.body
  console.log(datos)
*/