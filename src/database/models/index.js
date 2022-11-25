'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
const { error } = require("console");
var mysql= require("mysql");
var conexion = mysql.createConnection({
    host:"localhost",
    database:"usuario_db",
    user: "root",
    password:"",

}
);
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conectado");

    }

});
//---mostrar---//
conexion.query("SELECT * FROM usuario",funtion(error,filas){
    if(error){
        throw error
    }else{
        filas.forEach(fila => {
            console.log(fila)
            
        })
    }
});
conexion.end()
//-----insertar--//
conexion.query("INSERT INTO usuarios()", function(error,result) {

})
module.exports = db;
