const Visitor = require("../model/Visitor");

exports.index = (req,res) => {
    res.render("Index");
}

exports.post_index = (req, res) => {
    Visitor.post_visitor(req.body);
    res.send(req.body);
}

exports.post_index = async (req, res) => {
    var data = await Visitor.get_visitor();
    "1//1//1//1//\n2//2//2//2//\n"

    var info = data.split("\n");

    var flag = false;
    for(let i=0; i<infos.length; i++){
        // i=0, infos[i]="1//1//1//1";
        var info = info[i].split("//");
        if (info[0] == req.body.id&&info[1]==req.body.pw)flag=true;
    }
        if(flag) res.send("성공");
        else res.send("실패");
}