const Member = require("../model/Member");

exports.get_members = async (req,res) => {
    Member.get_members(function(result){
        console.log("result : ", result);
        console.log("index");
        res.render("index", {data:result});
    });
}

exports.post_comment = (req,res)=>{
    console.log(req.body);


    Member.insert(req.body.id, req.body.pw, req.body.name, req.body.email, function(result){
        res.send({id:result});
    });
}

exports.get_member=(req,res)=>{
    Member.get_member(req.query.id, function(result){
        console.log("result : ", result);
        console.log("result[0] : ", result[0]);
        res.send({result: result[0]});
    })
}

exports.patch_comment=(req,res)=>{
    Member.update(req.body, function(result){
        console.log(result);
        res.send("회원가입 완료");
    });
}

exports.patch_comment=(req,res)=>{
    Member.update(req.body, function(result){
        console.log(result);
        res.send("로그인 성공");
    });
}


exports.patch_comment=(req,res)=>{
    Member.update(req.body, function(result){
        console.log(result);
        res.send("수정 성공");
    });
}

exports.delete_comment = (req,res)=> {
    Member.delete(req.body.id, function(result){
        console.log(result);
        res.send("탈퇴 완료");
    });
}