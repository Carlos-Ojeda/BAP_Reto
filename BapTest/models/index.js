const config = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool : config.pool
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize);
db.task = require('./task.model.js')(sequelize, Sequelize);

db.task.belongsTo(db.user, {
    through: "task",
    foreignKey: "user_email",
    otherKey: "email"
});

module.exports = db;