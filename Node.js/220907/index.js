var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "server hello");
    //emit은 write의 개념이다. 보내는 것. 
    //이벤트명이 동일해야 받을 수 있다.(hello)
    //hello는 클라이언트가 받는 글자, server hello는 보내는 글자
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", 'io success');
    })
});

//io객체가 socket.io를 불러온다.

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});

//socket.io는 방 개념이기 때문에 연결된 모든 사람한테 보낸다?
//io는 모든 연결을 가지고 있다. 전체 연결을 관리한다.

