module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return User;
};