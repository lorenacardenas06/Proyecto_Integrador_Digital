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
    return ventas;
}

module.exports = ventaData;

  producto_id_FK INTEGER NOT NULL,
  detalle_id_FK INTEGER NOT NULL,
  usuario_id_FK INTEGER NOT NULL,
  