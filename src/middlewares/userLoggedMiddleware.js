const db = require('../database/models')
function loggedMiddleware(req, res, next) {
    res.locals.isLogged = false
    let emailCookie = req.cookies.email
    if (emailCookie) {
        db.Usuario.findOne({where: {email: emailCookie}})
            .then(function(usuarioCookie) {
                /* Maintiene la sesión con los datos de la cookie */
                if (usuarioCookie && req.session) {
                    /* borrar informacion sensible para no pasarla a la session */
                    delete usuarioCookie.dataValues.contrasena
                    req.session.usuarioLogged = userCookie
                }
            })

    }
    let logged = req.session.usuarioLogged
    /* Le pasa los datos del usuario a todo el sito web */
    if (logged) {
        res.locals.isLogged = true
        res.locals.Usuario = logged
    }
    next();
}
module.exports = loggedMiddleware
