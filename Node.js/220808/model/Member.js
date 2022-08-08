const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', 
    database: 'sesac'
});

exports.get_members = (cb) => {
    cnn.query( 'SELECT * FROM member', (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}
exports.insert = (id, pw, name, email, cb) => {
    var sql = "INSERT INTO member(id, pw, name, email) VALUES('"+id+"', '"+pw+"', '"+name+"', '"+email+"')";
    cnn.query(sql, (err, rows) => {
        if(err) throw err;

        console.log(rows);
        cb(rows.insertId);
    });
}

exports.get_member = (id, cb) => {
    cnn.query(`select * from member where id = ${id} limit 1;`, (err, rows) => {
        if(err) throw err;

        cb(rows);
    });

}

exports.update = (data, cb) => {
    let sql = `UPDATE member SET id='${data.id}', pw='${data.name}' WHERE name=${data.name} and email=${data.email}`;
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        cb(rows);
    })
}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM member WHERE id=${id}`, (err, rows)=>{
        if(err) throw err;
        cb(rows);
    })
}