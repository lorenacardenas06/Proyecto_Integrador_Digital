//-----------------REQUERIMIENTOS-------------------------
const fs = require('fs');
const path = require('path');

function auditoriaUnoMiddleware(req,res,next){
    console.log("Auditoria Uno Middleware");
    next();
}

module.exports = auditoriaUnoMiddleware;
