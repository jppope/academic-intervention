module.exports = function (sequelize, DataTypes) {
	return sequelize.define('paper', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
        },
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
        },
        desc: {
			type: DataTypes.TEXT('medium'),
			allowNull: true
		},
		author: {
			type: DataTypes.STRING(255),
			allowNull: false,
        },
        source_url: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
		site: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		rating_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		verified: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		date_published: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		// created_at: {
		// 	type: DataTypes.DATE,
		// 	allowNull: true
		// },
		// updated_at: {
		// 	type: DataTypes.DATE,
		// 	allowNull: true
		// },	
	}, {
		tableName: 'paper'
	});
};
