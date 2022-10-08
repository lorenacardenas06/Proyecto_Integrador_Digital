const controladorUsuarios = {
  registrar: (req, res) => {
    res.render("login");
  }, //registar usuarios
 ingreso:(req, res)=> {
    res.render("ingreso");
  }//inicio de sesion
};

module.exports = controladorUsuarios;
