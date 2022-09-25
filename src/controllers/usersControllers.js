const controladorUsuarios = {
  registrar: (req, res) => {
    res.sendFile(__dirname, "../views/login.html");
  }, //registar usuarios
};

module.exports = controladorUsuarios;
