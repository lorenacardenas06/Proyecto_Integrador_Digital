function categoriaData(sequelize, Datatypes)
{
    let a = 'Categoria';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Categoria'};
    const categoria= sequelize.define(a,b,c);
    categoria.associate = function (modelos){
        categoria.hasMany(modelos.Producto, {
           as: "Producto",
           foreignKey: "categoria_id_FK"
        });
    } 
    return categoria;
}

module.exports = categoriaData;
