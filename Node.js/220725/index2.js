const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.render("index2");
});

app.get("/receive2", function(req,res){
    console.log(req);
    console.log(req.query);
    res.render("receive2", req.query);
    // console.log("receive-get");
    // res.render("index");
});

app.post("/receive2", function(req,res){
    // console.log("receive-post");
    console.log(req.body);
    res.render("receive2", req.body);

    // res.render("recevie", {a:1, b:2});
    // res.render("index");
});

// 같은 경로여도 method를 통해서 나눌 수 있다.

app.listen(port, ()=>{
    console.log("Server Port : ", port);
})