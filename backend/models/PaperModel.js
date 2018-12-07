/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    group: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    verified: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};



// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('triboroback', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });

// const triboro_products = require('./src/models/triboro_products')(sequelize, Sequelize);
// // const triboro_orders = require('./src/models/triboro_orders')(sequelize, Sequelize);

// const db = {
//     Sequelize,
//     sequelize,
//     // triboro_orders,
//     triboro_products
// }

// db.sequelize.sync();

// module.exports = db;
var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('triboroback', 'root', 'password', {
    host: 'localhost',
    port: '3306'
});

auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});