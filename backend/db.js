const conn = require('env');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(conn);
const User = require('./models/User')(sequelize, Sequelize);
const db = {
	Sequelize,
	sequelize,
	User
}
db.sequelize.sync();
module.exports =  db;
