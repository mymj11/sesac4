const express = require('express');
const cookieParser = require("cookie-parser");
//cookie-parser가 쿠키를 만들어준다. 브라우저를 껐다가 켜도 만료기간까지 계속 유지
const session = require("express-session");
//세션은 무조건 서버에 요청을 보내야 한다. 세션은 연결이 끊기면 설정한 것들이 없어진다.
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false, //session을 덮어쓸지 정하는 것. 왜냐하면 세션은 기한이 없고 아이디와 값만 있기 때문이다.
    // saveUninitialized: true //미리 세션을 만들어 놓는다?
}))

// app.get("/login", (req,res)=>{
//     res.render("login");
// });
//로그인 페이지 보여주는 경로

// app.post("/login", (req,res)=>{
//     var flag = true;
//     if (flag) {
//         req.session.id = req.body.id;
//         res.redirect("profile");
//     }else res.redirect("login"); //실패하면 다시 로그인 페이지가 보인다.
// });  //검색을 하고 나온 결과가 flag라고 하자
        //redirect()는 이동할 때 사용
// app.get("/profie", (req,res)=>{
//     if(req.session.id ==undefined || req.session.id == ""){
//         res.redirect("/login");
//         return false;
//     }
    //세션을 검사한다. 아이디가 undefined이면 다시 로그인 페이지로 가라고 함. 
    //하지만 아이디가 위에서 있기 때문에 db에서 아이디를 가져오면 된다. 

//     req.session.i 로 작업~
//     res.render("profile");
// })
// app.get("/main", (req,res)=>{

// })

const cookieConfig = {
    maxAge: 30000, //완료기간 설정(ex.30초)
    path: '/',
    httpOnly: true, //웹 서버에서만 가능, 클라이언트에서 document 객체로 접속 못한다.
    signed: true, //쿠키를 암호화한다. 그래서 값을 value로 지정했지만 앞뒤로 다른 언어들이 붙는다.
};

app.get("/", (req,res)=>{
    req.session.name = "홍길동"; //세션설정//name이라는 키로 홍길동을 저장한 것
    res.cookie('key', 'value', cookieConfig);//쿠키설정
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res)=>{
    console.log(req.session.name);
    //console.log(req);
    console.log(req.cookies);
    res.send(req.cookies);
});
//쿠키는 클라이언트한테 저장이 된다. 
//쿠키는 document 객체 최상위에 담겨있다.(cookie.ejs)
//그래서 서버가 이 쿠키를 보여주기 위해서는
//서버는 클라이언트한테 쿠키를 받아야 하기때문에 req를 사용해야 한다.
//url에 접속한다는 것은 서버에 요청을 한다는 것이다.

app.get("/cookie", (req,res)=>{
    res.render("cookie");
})

app.get("/destroy", (req,res)=>{
    // res.render("cookie");
    // req.session.destroy(function(err){
    //     res.send("삭제");
    // })
    req.session.name = "";//특정한 값만 삭제할 경우, 설정하는 값이 빈값이면 된다.
    res.send("123");
})
//destroy는 한 번에 삭제하는 것

app.listen(8000, ()=>{
    console.log("Server : ", 8000);
})