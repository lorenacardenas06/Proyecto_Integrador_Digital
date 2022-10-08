const controladorUsuarios = {
  registrar: (req, res) => {
    res.render("login");
  }, //registar usuarios
 singIN:(req, res)=> {
    res.render("singIn");
  }//inicio de sesion
};

module.exports = controladorUsuarios;
