function marcaData(sequelize, Datatypes)
{
    let a = 'Marca';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
    }
    let c = {camelCase: false, timestamps: false, tableName: 'Marca'};
    const Marca= sequelize.define(a,b,c)
    Marca.associate = function (modelos){
        Marca.hasMany(modelos.Producto,
            {
        as: "Producto",
        foreignKey: "marca_id_FK"
        });
    } 

    return Marca
}
module.exports = marcaData;