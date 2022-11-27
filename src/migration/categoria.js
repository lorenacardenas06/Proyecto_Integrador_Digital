  
module.exports = function(sequelize, DataTypes) {
    up: async(QueryInterface,Sequelize)=>{
        return QueryInterface.create("categoria",{  
        id: {
            type:DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.VARCHAR
        }
    })
    };
    let config = {
        tableName:"categoria",
        timetamps:false
    }
    down: async (QueryInterface,Sequelize)=> { 
        return  QueryInterface.dropTable(categoria)
       }
        
}