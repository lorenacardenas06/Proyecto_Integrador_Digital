function productoData(sequelize, Datatypes)
{
    let a = 'Producto';

    let b = {
        id:{type:Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(500)},
        precio:{type:Datatypes.INTEGER},
        imagen:{type:Datatypes.STRING(200)},
        descripcion:{type:Datatypes.STRING(1000)},
        fecha_eliminacion:{type:Datatypes.DATE},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Producto'};
    const productos= sequelize.define(a,b,c)
    return productos;
}

module.exports = productoData;
    