const controladorUsuarios = {
  registrar: (req, res) => {
    res.render("/users/login");
  }, //registar usuario
  ingreso:(req, res)=> {
    res.render("/users/ingreso");
  },//inicio de sesion
  perfil:(req, res)=> {
    res.render("/users/profile");
  }//perfil usuario
};

module.exports = controladorUsuarios;
