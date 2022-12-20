function tiendaData(sequelize, Datatypes)
{
    let a = 'Tienda';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Tienda'};
    const Tienda= sequelize.define(a,b,c);
    Tienda.associate = function (modelos){
        Tienda.hasMany(modelos.Usuario, {
           as: "Usuario",
           foreignKey: "tienda_id_FK",
        });
    }
    return Tienda;
}

module.exports = tiendaData;