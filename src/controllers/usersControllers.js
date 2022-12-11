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
 acceso: (req, res) => {
    res.render("./users/acceso");}, 
  login: (req, res) => {
    res.render("./users/registro");
  }, 
  //registar usuario
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
        "contrasena": bcrypt.hashSync(datosUsuario.contrasenaUser,10),
        "categoria": datosUsuario.categoriaUser,
        "imagenUsuario": "/img/users/" +req.file.filename,
      };
      users.push(nuevoUsuario);
      fs.writeFileSync(usuariosFilePath,JSON.stringify(users,null," "),'utf-8');
      res.redirect('./users/login');
    }else{
      res.render('./users/registro',{ errores : errores.mapped(), datosUsuarioViejo: req.body });
    }
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  procesoLogin: (req, res) => {
    res.send("LLEGUE");
    const errores = validationResult(req);
    let datosUsuarioLogin = req.body;
    console.log(datosUsuarioLogin);
    if(errores.isEmpty()){
      
      /*
      const usuariosFilePath = path.join(__dirname,'../data/usuarios.json');
      const usersJSON = fs.readFileSync(usuariosFilePath,'utf-8');
      let users;
      if (usersJSON == ""){
        users = [];
      }else {
        users = JSON.parse(usersJSON);
      }
      */
     
    for (let i=0; i< users.length; i++){
      if(datosUsuarioLogin.emailLogin == users[i].email){
       // let usuarioLogeado = users[i];
        res.send("ESTA EL USUARIO CORRECTO");
        break;
      }
      res.redirect('./users/perfil');
    }   
  } else{
    res.render('./users/registro',{ errors : errors.mapped(), datosUsuarioViejo: req.body });
  }
},
}

 //------------EXPORTAR MODULO CONTROLADOR USUARIOS------------------
module.exports = controladorUsuarios;
