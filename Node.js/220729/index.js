const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
// const upload = multer({
//     dest: "uploads/"
//     // 파일 경로를 정해 줌
// })
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5*1024*1024},
});

// path.extname 확장자를 알 수 있다.
// destination는 저장할 경로이다.

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", test, test2, function(req,res){
    res.render("index");
});
app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});
//파일 업로드를 도와주는 미들웨어가 multer다.
// 이는 업로드를 처리 후 req.파일에 담아서 넘긴다.
// upload라는 객체에는 single이라는게 있는데 이는 파일을 한 개만 업로드 해주는 것이다.

app.post("/upload/array", upload.array("userfile"), function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});

app.post("/upload/fields", upload.fields([{name:"userfile1"}, {name:'userfile2'}, {name:'userfile3'}]), function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});

function test(req, res, next){
    console.log("test함수");
    console.log(req.path);
    req.aaa="....";
    next();
}
function test2(req, res, next){
    console.log("test2함수");
    console.log(req.aaa);
    next();
}
app.listen(port, ()=>{
    console.log("Server Port : ", port);
})

