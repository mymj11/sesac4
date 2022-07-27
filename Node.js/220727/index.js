const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
// const { render } = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("index");
})
// res.render()는 페이지를 로딩한다. view를 보여준다.

app.get("/test", function(req, res){
    res.send("test");
})

app.get("/test2", function(req, res){
    res.send({name:"test2", message:123});
})

app.get("/receive", function(req,res){
    console.log(req.body);
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕";
    res.send({name: name, message: msg});
})

app.post("/receive", function(req,res){
    console.log(req.body);
    let name = req.body.name;
    let msg = req.body.name + "안녕";
    // res.send();
    res.send({name: name, message:msg});
    // res.send(req.body.name + "안녕");
})
// res.send()는 인자 1개만 보낼 수 있다.

app.listen(port, ()=>{
    console.log("Server Port : ", port);
})
