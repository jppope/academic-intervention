const Sequelize = require('sequelize');
const sequelize = new Sequelize('academic_intervention', 'brianmorris', 'Darefare3', {
  host: 'mydbinstance.cfudftsks7ny.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
//  storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});


const User = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
});
module.exports = User;
// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('users', {
//     id: {
//       type: DataTypes.INTEGER(10).UNSIGNED,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     phone: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     group: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     account: {
//       type: DataTypes.INTEGER(11),
//       allowNull: false
//     },
//     verified: {
//       type: DataTypes.INTEGER(1),
//       allowNull: false
//     },
//     remember_token: {
//       type: DataTypes.STRING(100),
//       allowNull: true
//     },
//     deleted_at: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     created_at: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     updated_at: {
//       type: DataTypes.DATE,
//       allowNull: true
//     }
//   }, {
//     tableName: 'users'
//   });
// };