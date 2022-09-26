module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        deadline: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comments: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.STRING
        }
    });
    return Task;
};