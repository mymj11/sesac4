const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            console.log("destination : ", req.body);
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            done(null, req.body.id + ext);
            // req.body.id는 아이디명으로 파일명을 저장하겠다는 의미이다.
            // Date.now()는 파일을 같은 이름으로 여러 번 업로드 하면 여러 개 올라간다.
            // 하지만, 이를 쓰지 않으면 같은 이름으로 여러 번 업로드를 해도 계속 덮어쓴다.
        },
    }),
    limits: {fileSize: 5*1024*1024},
});

app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/abc/aa', express.static('uploads'));

app.get("/", function(req,res){
    res.render("index2");
});

app.post("/upload", upload.single('userfile'), function(req,res){
    res.render("receive3", {filename: req.file.filename});
});
// <%=filename%>이기 때문에 {filename:}이어야 한다.

app.post("/upload", upload.single('userfile'), function(req,res){
    res.send("Upload");
});

app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.render("receive3", res.file);
});

app.listen(port, ()=>{
    console.log("Server Port : ", port);
})

// 파일을 선택하고 회원가입 버튼을 누르면 
// upload 폴더에 입력한 아이디명으로(아이디명.jpg) 파일이 업로드되고 
// 페이지가 바뀌면서 그 사진 파일이 보여진다.