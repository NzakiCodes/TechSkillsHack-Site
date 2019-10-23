const db = require("../database/db");

module.exports = db.sequelize.define(
    'user',
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    }
)