function usuarioData(sequelize, Datatypes)
{
    let a = 'Usuario';

    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
        apellido:{type:Datatypes.STRING(50)},
        email:{type:Datatypes.STRING(50)},
        imagen:{type:Datatypes.STRING(200)},
        descripcion:{type:Datatypes.STRING(200)},
        rol:{type:Datatypes.ENUM("comun","admin","superAdmin")},
    }

    let c = {camelCase: false, timestamps: false, tableName: 'Usuario'};
    const usuarios= sequelize.define(a,b,c);
    usuarios.associate = function (modelos){
        usuarios.hasMany(modelos.Venta, {
           as: "Venta",
           foreignKey: "usuario_id_FK",
        });
    },
    usuarios.associate = function (modelos){
        usuarios.belongsTo(modelos.tienda, {   
           as: "tienda",
           foreignKey: "tienda_id_FK",
            });
    }

    return usuarios;
}
module.exports = usuarioData;