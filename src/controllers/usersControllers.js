const fs=require("fs");
const path= require("path");
const usuariosFilePath = path.join(__dirname, "../database/usuarios.json")

const usuarios=JSON.parse(fs.readFileSync(usuariosFilePath,"utf-8"))

const controladorUsuarios = {
  registrar: (req, res) => {
    res.render("./users/registro");
  }, //registar usuario
  ingreso:(req, res)=> {
    res.render("./users/ingreso");
  },//inicio de sesion
  perfil:(req, res)=> {
    res.render("./users/perfil");
  },//perfil usuario
  registrarUsuario:(req, res)=> { 
    let datos=req.body
    console.log(datos)
  }
};

module.exports = controladorUsuarios;
