var express = require("express");
const { send } = require("process");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/index3.html");
});

//io => 클라이언트와의 모든 연결을 갖고 있는 친구
//io.to().emit("newMessage", data); //특정 아이디에게만 메시지를 보낸다.
//to()에 특정한 친구의 고유 식별자 즉, 아이디가 들어가야 한다.
//socket > 클라이언트 한 명. socket.id 클라이언트 구분하는 식별자


var list = {};
io.on("connection", function(socket){
    console.log("connected : ", socket.id);
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list", list);
    });
    // socket.emit("info", socket.id);
    //info라는 이벤트로 보내준다.
    // io.emit("notice", socket.id);
    //모든 사람에게 지금 접속한 새로운 사람을 알려준다.
    socket.on("send", function(data){
        //send로 보낸 메시지는 data = {id:~~~, msg:~~~}; 형태이다.
        console.log("client message : ", data.msg);
        data["is_dm"] = false;
        //클라이언트에서 메시지와 디엠을 구분하기 위해서
        data["nickname"] = list[socket.id];
        if(data.to == "전체"){
            io.emit("newMessage", data);
        } else{
            data["is_dm"] = true;
            // data.to = '2';
            // list = {a: '1', b: '2', c: '3'};
            let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; });
            //함수를 감싸면 return을 붙여야 한다. //객체에서 키들을 다 가져오자.
            //lsit[key]는 1,2,3이므로 data.to='2'이면 list에 b: '2'와 일치하기 때문에 b가 나온다.
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
        // io.emit("newMessage", data); //내가 받은 메시지를 그대로 모든 사람들에게 보내기//id와 msg 정보를 전부 보낸다.
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
        //이미 퇴장한 친구(퇴장 메시지)가 남아 있으면 안 되니까 지워주자.
        io.emit("list", list);
        //퇴장할 때 자동으로 리스트를 보내니까 이전에 퇴장한 닉네임은 자동으로 사라짐.(새로고침 안 해도 실행됨)
    });
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});