var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/index3.html");
});

//io => 클라이언트와의 모든 연결을 갖고 있는 친구
//socket > 클라이언트 한 명. socket.id 클라이언트 구분하는 식별자

io.on("connection", function(socket){
    console.log("connected : ", socket.id);
    socket.emit("info", socket.id);
    //info라는 이벤트로 보내준다.
    io.emit("notice", socket.id);
    //모든 사람에게 지금 접속한 새로운 사람을 알려준다.
    socket.on("send", function(data){
        //send로 보낸 메시지는 data = {id:~~~, msg:~~~}; 형태이다.
        console.log("client message : ", data.msg);
        io.emit("newMessage", data); //내가 받은 메시지를 그대로 모든 사람들에게 보내기//id와 msg 정보를 전부 보낸다.
    });

    socket.on("disconnect", function(){
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    });
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});