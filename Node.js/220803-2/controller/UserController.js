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
    // Controller는 데이터를 읽을 수 없기 때문에
    // User라는 모델에서 User.get_user() 함수로 받아온 값을 data에 넣어라

    var info = data.split("//");
    // {"asdf", "asdf", "asdf", "{age}"} 배열이 만들어진다.

    if(info[0] != req.body.id){
        res.send("아이디 다름");
    } else if (info[1] != req.body.pw){
        res.send("비밀번호가 다름");
    } else {
        res.send("로그인 성공!");
    }
    console.log(data);
}