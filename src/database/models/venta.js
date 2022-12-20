function ventaData(sequelize, Datatypes)
{
    let a = 'Venta';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        monto_unitario:{type:Datatypes.FLOAT},
        cantidad:{type:Datatypes.INTEGER},
        producto_id_FK:{type: Datatypes.INTEGER},
        detalle_id_FK:{type: Datatypes.INTEGER},
        usuario_id_FK:{type: Datatypes.INTEGER}
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Venta'};
    const Venta= sequelize.define(a,b,c)
    Venta.associate = function (modelos){
        Venta.belongsTo(modelos.Producto, {   
           as: "Producto",
           foreignKey: "producto_id_FK"
        });
        Venta.belongsTo(modelos.DetalleVenta, {   
            as: "DetalleVenta",
            foreignKey: "detalle_id_FK"
        });
        Venta.belongsTo(modelos.Usuario, {   
            as: "Usuario",
            foreignKey: "usuario_id_FK"
        });
    }
    return Venta
}
module.exports = ventaData;