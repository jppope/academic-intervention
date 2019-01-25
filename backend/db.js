const conn = require('./env');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(conn);
const User = require('./models/User')(sequelize, Sequelize);
const Paper = require('./models/Paper')(sequelize, Sequelize);
const Group = require('./models/Group')(sequelize, Sequelize);
const db = {
	Sequelize,
	sequelize,
	User,
	Paper,
	Group
}
// don't fucking put this object => {force: true} into the sync
db.sequelize.sync();
module.exports = db;
