
module.exports = function(sequelize, DataTypes) {
    up: async(QueryInterface,Sequelize)=>{
        return QueryInterface.create("marca",{ 
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
        tableName:"marca",
        timetamps:false
    }
    down: async (QueryInterface,Sequelize)=> { 
        return  QueryInterface.dropTable(marca)
       }
        
}