//-----------------REQUERIMIENTOS-------------------------
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
//----------------IMPORTO MODELOS----------------------------------------
const db = require("../database/models");
//------------OBJETO DEL CONTROLADOR------------------
const controladorUsuarios = 
{
//------------mostrar pagina de registro------------------
  usuarioRegistro: (req,res) => { 
    res.render("users/registro"); },
//------------mostrar pagina login ------------------
  login: (req, res) => { 
    res.render ('users/login'); },
//-------------mostrar perfil de usuario ---------
  perfil: async (req, res) => { 
    let usuario = await db.Usuario.findOne({where: {id: req.params.id}})
    res.render("users/perfil", {usuario : usuario})},
  //------------------crear usuario-----------------
  crearUsuario: (req, res) => {
    // const errores = validationResult(req);
    if (true) {
      db.Usuario.findOne({ where: { email: req.body.email } }).then(function (
        usuario
      ) {
        if (usuario) {
          console.log("El usuario ya existe");
          return res.render("users/registro");
        } else {
          let usuarioNuevo = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            rol: req.body.rol,
            imagen: "/img/users/" + req.file.filename,
          };
          db.Usuario.create(usuarioNuevo).then(function (usuario) {
            return res.render("users/login");
          });
        }
      });
    } else {
      res.render("./user/registro");
      // res.render('./user/registro',{ errores : errores.mapped(), datosUsuarioViejo: req.body });
    }
  },
  procesoLogin: (req, res) => {
    //     // const errores = validationResult(req);
    if (true) {
      db.Usuario.findOne({ where: { email: req.body.email } }).then(function (
        usuario
      ) {
        /* Se envia un mensaje de error si no se encuentra el usuario*/
        if (!usuario) {
          console.log("El usuario no se encuentra registrado");
          return res.render("users/registro");
        }
        if (bcrypt.compareSync(req.body.contrasena, usuario.contrasena)) {
          /* Crear cookie */
          res.cookie("email", usuario.email, {
            maxAge: 600000 * 144,
            httpOnly: true,
          });
          // we're going to save the email in the session
          return res.render("users/perfil", {usuario:usuario});
          // return res.redirect(`users/perfil/${usuario.id}`)
        } else {
          /* Se envia un mensaje de error por contraseña incorrecta */
          console.log("Contraseña erronea");
          return res.render("users/login");
        }
      });
    }
  },
  editarPerfil: (req,res) =>{
    let usuario = db.Usuario.findOne({where: {id: req.params.id}}).then(function(usuario){
      return res.render("users/editarPerfil", {usuario:usuario});
    })
  },

  actualizarPerfil: async (req,res) =>{
    let nuevosDatos = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      imagen: "/img/users/" + req.file.filename,
    }
    let actualizarUsuario = await db.Usuario.update(nuevosDatos, {where: {id: req.params.id}});
    let usuario = await db.Usuario.findOne({where: {id: req.params.id}})
    res.render("users/perfil", {usuario : usuario})
  },
  consultaUsuario : async (req, res) => {
    const usuarios = await db.Usuario.findAll()
    res.json(usuarios)
  }
};
//   //   res.render('./users/registro',{ errors : errors.mapped(), datosUsuarioViejo: req.body });
//------------EXPORTAR MODULO CONTROLADOR USUARIOS------------------
module.exports = controladorUsuarios;

//----------------DATOS DEL JSON----------------------------------------
//const usuariosFilePath = path.join(__dirname,'../data/usuarios.json');
//const users = JSON.parse(fs.readFileSync(usuariosFilePath,'utf-8'));
