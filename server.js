const express=require('express');
const app=express();
var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost', //主机的IP地址
    port:3307,
    user:'root',    //mysql用户名 
    password:'123456',  //密码
    database:'nhclike'       //数据库名  
});

require('http').createServer(app).listen(5000);



//查询
app.get('/',function(req,res){
	console.log('查询')
     pool.getConnection(function(err,connection) {
        if(err) {
            console.log("建立连接失败");
        }else{
            console.log("建立连接成功");
            console.log(pool._allConnections.length);//1 
            connection.query('select * from tb_menu',function(err,rows) {
                if(err) {
                    console.log("查询失败");
                }else{
                    console.log(rows);  
                    res.json(rows);
                }
                //connection.destroy();
                console.log(pool._allConnections.length);//0    
            });
        }
        pool.end();
    });
});



 