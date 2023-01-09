/* Redirecciona a login en caso de no haber iniciado sesión */
function cartMiddleware(req, res, next) {
    let logged = req.session.usuarioLogged
    if (!logged) {
        return res.redirect('/users/login')
    }
    next()

}
module.exports = cartMiddleware
