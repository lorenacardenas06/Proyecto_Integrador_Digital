function detalle_ventaData(sequelize, Datatypes)
{
    let a = 'Detalle_Venta';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        fecha_venta:{type:Datatypes.DATE},
        monto_total:{type:Datatypes.FLOAT},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Detalle_Venta'};
    const detalle_venta= sequelize.define(a,b,c)
    return detalle_venta;
}

module.exports = detalle_ventaData;
