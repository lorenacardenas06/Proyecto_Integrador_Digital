const { QueryInterface, Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
up: async(QueryInterface,Sequelize)=>{
    return QueryInterface.create("producto", {
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        nombre: {
            type:DataTypes.VARCHAR,
            limite: 50,
            allowNull:false
        },
        precio: {
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        imagen: {
            type:DataTypes.VARCHAR,
            allowNull:false
        },
        descripcion: {
            type:DataTypes.LONGTEXT,
            allowNull:false
        },
        fecha_eliminacion: {
            type:DataTypes.DATETIME,
            allowNull:false
        },
    })
    };
    let config = {
        tableName:"producto",
        timetamps:false
    }
    let producto=sequelize.define(alias,col,config);
    producto.associate = function(models){
        producto.belogTo (models.categoria, {
            as:"categoria",
            foreignKey: "categoria_id"
        })
        productos.belongToMany(models.marca, {
            as:"marca",
            foreignKey: "marca_id",
            
        })
    }
    down: async (QueryInterface,Sequelize)=> { 
        return  QueryInterface.dropTable(producto)
       }
        
    };
    
    return producto