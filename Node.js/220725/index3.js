const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.render("index3");
});

app.get("/receive3", function(req,res){
    console.log(req.query);
    res.render("receive3", req.query);
    // console.log("receive-get");
    // res.render("index");
});

app.post("/receive3", function(req,res){
    console.log("receive-post");
    // console.log(req.body.name);
    res.render("receive3", req.body);
    
    const i = req.body.name +'//'+ req.body.id +'//'+ req.body.password;
    console.log(i);

    const fs = require("fs").promises;
    fs.writeFile("./info.txt",i);

    // res.render("recevie", {a:1, b:2});
    // res.render("index");
});

// 같은 경로여도 method를 통해서 나눌 수 있다.

app.listen(port, ()=>{
    console.log("Server Port : ", port);
})