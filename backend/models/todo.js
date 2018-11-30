module.exports = (sequelize, DataTypes) => {
	return sequelize.define('todo', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		task : {
			type: DataTypes.STRING
		},
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
			allowNull: false
		},
		deleted_at: {
			type: DataTypes.DATE,
		}
	}, {
		paranoid: true,
		underscored: true
	})
}
