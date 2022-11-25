module.exports = function(sequelize, DataTypes) {
    let alias = "producto";
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
        precio: {
            type:DataTypes.DECIMAL
        },
        imagen: {
            type:DataTypes.VARCHAR
        },
        descripcion: {
            type:DataTypes.LONGTEXT
        },
        fecha_eliminacion: {
            type:DataTypes.DATETIME
        },
        
    }
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
    
    
    return producto;
}