const mysql = require("mysql");

const cfg = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "123456",
    database: "panda_blog"
};

const conn = mysql.createConnection(cfg);

conn.connect();

const sql = 'insert into user (name,email,password,sign,ctime) values (?,?,?,?,?)';
let params = ['admin', '123@qq.com', '123', '0', Math.floor(new Date().getTime() / 1000)];
conn.query(sql, params, function(err, result) {
    if(err){
        console.log(err);
    }else{

    }
});
conn.end();



