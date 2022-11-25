
module.exports = function(sequelize, DataTypes) {
    let alias = "venta";
    let col ={
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        monto_unitario: {
            type:DataTypes.DECIMAL
        },
        cantidad: {
            type:DataTypes.TINYINT,
            limite: 50
        },
    }
    let config = {
        tableName:"venta",
        timetamps:false
    }
    let venta = sequelize.define(alias,col,config);
    venta.associate = function(models){
        venta.hasMany(models.producto, {
            as:"producto",
            foreignKey:"producto_id",
        })
        venta.belongTo(models.local, {
            as:"local",
            foreignKey: "local_id",
            
        })
        venta.belongTo(models.detalle_venta, {
            as:"detalle_venta",
            foreignKey: "detalles_venta_id",
            
        })
        venta.hasMany(models.marca, {
            as:"marca",
            foreignKey: "marca_id",
            
        })
        venta.belongTo(models.usuario, {
            as:"usuario",
            foreignKey: "usuario_id",
            
        })
    }
    
    return venta;
}