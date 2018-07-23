var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost', //主机的IP地址
    port:3307,
    user:'root',    //mysql用户名 
    password:'123456',  //密码
    database:'kaifanla'        //数据库名       
});

/*connection.connect(function(err) {
    if(err) {
        console.log("连接失败");
    }else{
        console.log("连接成功");
    }
});
 
connection.end(function(err) {
    if(err) {
        console.log("关闭连接失败");
    }else{
        console.log("关闭连接成功");
    }
});*/
module.exports.connection=connection;