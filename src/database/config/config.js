module.exports = {
  "development": {
    "username": "289889",
    "password": Lore961206*,
    "database": "bd_acmaquillaje",
    "host": "mysql-lorenacardenas06.alwaysdata.net",
    "dialect": "mysql",
    "port": 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
require("dotenv").config();

module.exports = {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT,
      "port":process.env.DB_PORT,
}
}