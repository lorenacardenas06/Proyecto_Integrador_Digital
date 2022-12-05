function productoData(sequelize, Datatypes)
{
    let a = 'producto';

    let b = {
        id:{type:Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(500)},
        precio:{type:Datatypes.INTEGER},
        imagen:{type:Datatypes.STRING(500)},
        descripcion:{type:Datatypes.STRING(1000)},
        fecha_eliminacion:{type:Datatypes.DATE},
    }

    let c = {camelCase: false, timestamps: false};
    const productos= sequelize.define(a,b,c)
    return productos;
}

{
    marca_id:{type:Datatypes.INTEGER},
    categoria_id:{type:Datatypes.INTEGER},
}
    
module.exports = productoData;
    