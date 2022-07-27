const bodyParser = require("body-parser");
    const express = require("express");
    const app = express();
    const port = 8080;
    const fs = require("fs").promises;

    app.set("view engine", "ejs");
    app.use( express.static( "public" ));
    app.use(express.urlencoded({extended: true}));
    app.use( bodyParser.json() );

    app.get("/", function(req,res){
        res.render("index4");
    });

    app.get("/receive4", function(req,res){
        console.log( req.query );
        res.send("receive4", req.query);
    });

    app.post("/receive4", function(req,res){
        console.log(req.body);
        let msg = "회원가입이 완료되었습니다.";
        res.send({message: msg});

        fs.readFile("./info.txt")
        .then((data) => {
            let arr = data.toString().split("//");
            console.log(arr[1],arr[2]);
        if ( arr[1] == req.body.id && arr[2] == req.body.password ){
            res.send("로그인이 되었습니다.");
        } else 
            res.send("로그인이 실패하였습니다.");
            
        });
    })
    // true, false로 하는게 오류가 날 확률이 적다


    // app.get("/receive4", function(req,res){
    //     console.log(req.body);
    //     let name = req.query.name;
    //     let msg = req.query.name + "회원가입이 완료되었습니다.";
    //     res.send({name: name, message: msg});
    // })

    // app.post("/receive4", function(req,res){
    //     fs.readFile("./info.txt")
    //     .then((data) => {
    //         let arr = data.toString().split("//");
    //         console.log(arr[1],arr[2]);
    //     if ( arr[1] == req.body.id && arr[2] == req.body.password ){
    //         res.send("로그인이 되었습니다.");
    //     } else 
    //         res.send("로그인이 실패하였습니다.");
            
    //     });
    // })

    app.listen(port, ()=>{
        console.log( "Server Port :", port );
    });






