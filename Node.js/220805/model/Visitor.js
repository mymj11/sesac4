const fs = require("fs").promises;

exports.post_visitor = function(data){
    const {id, name, comment} = data;
    fs.appendFile("./info.txt", '${id}//${name}//${comment}\n');
}

exports.get_visitor = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}