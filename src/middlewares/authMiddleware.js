function authMiddleware(req, res, next) {
    let logged = req.session.usuarioLogged
    if (!logged || logged.id != req.params.id) {
        return res.redirect('/users/login')
    }
    next()
}

