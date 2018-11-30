module.exports = function (sequelize, DataTypes) {
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
		},
		show_email: {
			type: DataTypes.TINYINT(1),
			allowNull: false
		},
		show_phone: {
			type: DataTypes.TINYINT(1),
			allowNull: true
		},
		desc: {
			type: DataTypes.TEXT('medium'),
			allowNull: true
		},
		site: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		github_repo: {
			type: DataTypes.TEXT('long'),
			allowNull: true
		},
		favorite_papers: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'users'
	});
};
