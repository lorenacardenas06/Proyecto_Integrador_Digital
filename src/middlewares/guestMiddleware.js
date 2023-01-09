/* Redirecciona a perfil en caso de haber iniciado sesión */
function guestMiddleware(req, res, next) {
    let logged = req.session.usuarioLogged;
    if (logged) {
        return res.redirect(`/users/profile/${logged.id}`)
    }
    next()

}

module.exports = guestMiddleware
