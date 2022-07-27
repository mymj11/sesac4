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
        res.render("index3");
    });

    app.get("/receive3", function(req,res){
        console.log( req.query );
        res.send("receive3", req.query);
    });

    app.post("/receive3", function(req,res){
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

    app.listen(port, ()=>{
        console.log( "Server Port :", port );
    });

    // app.get("/receive3", function(req,res){
//     console.log(req.query);
//     let data = "sesac4//1234";
//     // // arr = [ "sessac4", "1234" ]

//     console.log("receive-get");

//     const fs = require("fs").promises;
//     fs.readFile("./info.txt").then((a)=>{
//         var data = a.toString();
//         res.send("123");
//         let arr = data.toString().split("//");
//             if ( arr[0] == req.body.id && arr[1] == req.body.password ){
//                 res.rander("로그인이 되었습니다.");
//             } else {
//                 res.rander("로그인이 실패하였습니다.");
//             }
//         });
//     })

// const express = require("express");
// const app = express();
// const port = 8080;
// const bodyParser = require("body-parser");
// const { response } = require("express");

// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.get("/", function(req,res){
//     res.render("index3");
// })

// app.get("/receive3", function(req,res){
//     console.log(req.query);
//     let data = "sesac4//1234";
//     // // arr = [ "sessac4", "1234" ]

//     console.log("receive-get");

//     const fs = require("fs").promises;
//     fs.readFile("./info.txt").then((a)=>{
//         var data = a.toString();
//         res.send("123");
//         let arr = data.toString().split("//");
//             if ( arr[0] == req.body.id && arr[1] == req.body.password ){
//                 res.rander("로그인이 되었습니다.");
//             } else {
//                 res.rander("로그인이 실패하였습니다.");
//             }
//         });
//     })

// app.listen(port, ()=>{
//     console.log("Server Port : ", port);
// })