
module.exports = function(sequelize, DataTypes) {
    let alias = "local";
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
        tableName:"local",
        timetamps:false
    }
    let local=sequelize.define(alias,col,config);
    
    return local;
}