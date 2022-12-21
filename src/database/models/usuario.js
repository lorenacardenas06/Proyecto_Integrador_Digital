function usuarioData(sequelize, Datatypes)
{
    let a = 'Usuario';
    let b = {
        id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre:{type:Datatypes.STRING(50)},
        apellido:{type:Datatypes.STRING(50)},
        email:{type:Datatypes.STRING(50)},
        contrasena: {type:Datatypes.STRING(200)},
        imagen:{type:Datatypes.STRING(200)},
        rol:{type:Datatypes.ENUM("comun","admin","superAdmin")},
        tienda_id_FK:{type: Datatypes.INTEGER},

    }

    let c = {camelCase: false, timestamps: false, tableName: 'Usuario'};
    const Usuario= sequelize.define(a,b,c);
    Usuario.associate = function (modelos){
        Usuario.hasMany(modelos.Venta, {
           as: "Venta",
           foreignKey: "usuario_id_FK",
        });
        Usuario.belongsTo(modelos.Tienda, {   
           as: "Tienda",
           foreignKey: "tienda_id_FK"
        });
    }
    return Usuario
}
module.exports = usuarioData;