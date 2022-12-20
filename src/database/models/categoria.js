function categoriaData(sequelize, Datatypes)
{
    let a = 'Categoria';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Categoria'};
    const Categoria= sequelize.define(a,b,c);
    Categoria.associate = function (modelos){
        Categoria.hasMany(modelos.Producto, {
           as: "Producto",
           foreignKey: "categoria_id_FK"
        });
    } 
    return Categoria
}
module.exports = categoriaData;