
module.exports = function(sequelize, DataTypes) {
    up: async(QueryInterface,Sequelize)=>{
        return QueryInterface.create("local",{ 
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.VARCHAR,
            limite: 50
        }
    })
    };
    let config = {
        tableName:"local",
        timetamps:false
    }
    let local=sequelize.define(alias,col,config);
    
    return local;
}