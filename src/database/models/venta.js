
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
        venta.hasMany(models.venta, {
            as:"local",
            foreignKey: "local_id",
            otherKey:"product_id",
            otherKey:"detalle_venta_id",
            otherKey:"usuario_id"
            
        })
    }
    
    return venta;
}