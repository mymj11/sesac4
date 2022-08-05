const User = require("../model/User");

exports.index = (req,res) => {
    res.render("Index");
}

exports.register = (req, res) => {
    res.render("register");

}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) => {
    var data = await User.get_user();
    "1//1//1//1//\n2//2//2//2//\n"
    // Controller는 데이터를 읽을 수 없기 때문에
    // User라는 모델에서 User.get_user() 함수로 받아온 값을 data에 넣어라

    // var info = data.split("//");
    var info = data.split("\n");
    // for(let i=0; i<infos.length; i++){
    //     // i=0, infos[i]="1//1//1//1";
    //     var info = info[i].split("//");
    //     if (info[0] == req.body.id&&info[1]==req.body.pw){
    //         res.send("성공");
    //         return false;
    //     }
    // }
    // res.send("실패");

    // var info = data.split("\n");
    var flag = false;
    for(let i=0; i<infos.length; i++){
        // i=0, infos[i]="1//1//1//1";
        var info = info[i].split("//");
        if (info[0] == req.body.id&&info[1]==req.body.pw)flag=true;
    }
        if(flag) res.send("성공");
        else res.send("실패");
}
    //infos=["1//1//1//1", "2//2//2//2"];

    // {"asdf", "asdf", "asdf", "{age}"} 배열이 만들어진다.

//     if(info[0] != req.body.id){
//         res.send("아이디 다름");
//     } else if (info[1] != req.body.pw){
//         res.send("비밀번호가 다름");
//     } else {
//         res.send("로그인 성공!");
//     }
//     console.log(data);
//  }