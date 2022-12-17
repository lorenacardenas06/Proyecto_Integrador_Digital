function tiendaData(sequelize, Datatypes)
{
    let a = 'Tienda';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Tienda'};
    const tienda= sequelize.define(a,b,c);
    tienda.associate = function (modelos){
        tienda.hasMany(modelos.usuarios, {
           as: "Usuarios",
           foreignKey: "tienda_id_FK",
        });
    },
    return tienda;
}

module.exports = tiendaData;
