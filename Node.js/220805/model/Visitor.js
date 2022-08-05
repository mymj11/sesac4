const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_visitors = () => {
    cnn.query('SELECT * FROM visitor', (err,rows)=>{
        if(err) throw err;
        console.log(rows);
    });
}







// const fs = require("fs").promises;

// exports.post_visitor = function(data){
//     const {id, name, comment} = data;
//     fs.appendFile("./info.txt", '${id}//${name}//${comment}\n');
// }

// exports.get_visitor = async function(){
//     var buffer = await fs.readFile("./info.txt");
//     return buffer.toString();
// }