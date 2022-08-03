const { readFile } = require("fs");

const fs = require("fs").promises;

exports.post_user = function(data){
    const {id, pw, name, age} = data;
    fs.writeFile("./info.txt", '${id}//${pw}//${name}//${age}');
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}
//     파일을 읽으면 buffer 형태로 보여지는데 
//     우리는 buffer 형태로 볼 수가 없으니 
//     .toString으로 변환해서 return 받는 것