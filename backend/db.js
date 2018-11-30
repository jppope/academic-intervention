const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://pope:burritos@mydbinstance.cfudftsks7ny.us-east-2.rds.amazonaws.com:3306/academic_intervention');
const todo = require('./models/todo')(sequelize, Sequelize);
const db = {
	Sequelize,
	sequelize,
	todo
}
db.sequelize.sync();
module.exports =  db;
