function ventaData(sequelize, Datatypes)
{
    let a = 'Venta';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        monto_unitario:{type:Datatypes.FLOAT},
        cantidad:{type:Datatypes.INTEGER},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Venta'};
    const ventas= sequelize.define(a,b,c)
    ventas.associate = function (modelos){

        ventas.belongsTo(modelos.Producto, {   
           as: "Producto",
           foreignKey: "producto_id_FK"
            });

        ventas.belongsTo(modelos.Detalle_Venta, {   
            as: "Detalle_Venta",
            foreignKey: "detalle_id_FK"
            });
        ventas.belongsTo(modelos.Usuario, {   
                as: "Usuario",
                foreignKey: "usuario_id_FK"
                });
    }
    return ventas;
}

module.exports = ventaData;
