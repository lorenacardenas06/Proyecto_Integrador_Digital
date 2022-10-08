const controladorUsuarios = {
  registrar: (req, res) => {
    res.render("./users/registro");
  }, //registar usuario
  ingreso:(req, res)=> {
    res.render("/users/ingreso");
  },//inicio de sesion
  perfil:(req, res)=> {
    res.render("/users/profile");
  },//perfil usuario
  registrarUsuario:(req, res)=> { 
    let datos=req.body
    console.log(datos)
  }
};

module.exports = controladorUsuarios;
