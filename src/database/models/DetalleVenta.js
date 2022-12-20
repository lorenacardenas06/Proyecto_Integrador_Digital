function detalleVentaData(sequelize, Datatypes)
{
    let a = 'DetalleVenta';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        fecha_venta:{type:Datatypes.DATE},
        monto_total:{type:Datatypes.FLOAT},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'DetalleVenta'};
    const DetalleVenta= sequelize.define(a,b,c);
    DetalleVenta.associate = function (modelos){
        DetalleVenta.hasMany(modelos.Venta, {
           as: "Venta",
           foreignKey: "detalle_id_FK",
        });
    } 
    return DetalleVenta
}

module.exports = detalleVentaData;