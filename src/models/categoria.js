
module.exports = function(sequelize, DataTypes) {
    let alias = "categoria";
    let col ={
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.VARCHAR
        }
    }
    let config = {
        tableName:"categoria",
        timetamps:false
    }
    let venta = sequelize.define(alias,col,config);
    
    return categoria;
}