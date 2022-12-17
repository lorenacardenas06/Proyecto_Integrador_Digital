function productoData(sequelize, Datatypes)
{
    let a = 'Producto';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
        precio:{type:Datatypes.FLOAT},
        imagen:{type:Datatypes.STRING(200)},
        descripcion:{type:Datatypes.STRING(200)},
        fecha_eliminacion:{type:Datatypes.DATE},
        marca_id_FK:{type: Datatypes.INTEGER},
        categoria_id_FK:{type: Datatypes.INTEGER}
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Producto'};
    const productos= sequelize.define(a,b,c)
    
    productos.associate = function (modelos){

        productos.belongsTo(modelos.Marca, {   
           as: "Marca",
           foreignKey: "marca_id_FK"
            });

        productos.belongsTo(modelos.Categoria, {   
            as: "Categoria",
            foreignKey: "categoria_id_FK"
            });
    }
    productos.associate = function (modelos){
        productos.hasMany(modelos.Venta, {
           as: "Venta",
           foreignKey: "producto_id_FK",
        });
    } 
    

    return productos;

}

module.exports = productoData;


