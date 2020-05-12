// 创建数据库连接
const Sequelize = require("sequelize");

const cfg = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "123456",
    database: "panda_blog"
};

let sequelize = new Sequelize(cfg.database, cfg.user, cfg.password, {
    host: cfg.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 1,
        idle: 30000
    }
});

let User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING(64),
    password: Sequelize.STRING(64),
    email: Sequelize.STRING(128),
    isadmin: Sequelize.TINYINT,
    sign: Sequelize.TINYINT,
    ctime: Sequelize.INTEGER
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = {
    User
};
