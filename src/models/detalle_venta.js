
module.exports = function(sequelize, DataTypes) {
    up: async(QueryInterface,Sequelize)=>{
        return QueryInterface.create("detalle_venta",{  
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        fecha: {
            type:DataTypes.DATETIME
        },
        mono_total: {
            type:DataTypes.DECIMAL
        },
    })
    };
    let config = {
        tableName:"detalle_venta",
        timetamps:false
    }
    let detalle_venta = sequelize.define(alias,col,config);

    return venta;
}