const { foreign_key } = require("i/lib/methods");

module.exports = function(sequelize, DataTypes) {
    let alias = "usuario";
    let col ={
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.VARCHAR,
            limite: 50
        },
        apellido: {
            type:DataTypes.VARCHAR,
            limite: 50
        },
        email: {
            type:DataTypes.VARCHAR
        },
        admin: {
            type:DataTypes.BIT
        },
        super_admin: {
            type:DataTypes.BIT
        },
        
    }
    let config = {
        tableName:"usuarios",
        timetamps:false
    }
    let usuario=sequelize.define(alias,col,config);
    usuario.associate = function(models){
        local.belongTo(models.local, {
            as:"local",
            foreignKey: "local_id",
            
        })
    }
    
    return usuario;
}