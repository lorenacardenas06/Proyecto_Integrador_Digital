
module.exports = function(sequelize, DataTypes) {
    let alias = "marca";
    let col ={
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.VARCHAR,
            limite: 50
        }
    }
    let config = {
        tableName:"marca",
        timetamps:false
    }
    let marca=sequelize.define(alias,col,config);
    
    return marca;
}