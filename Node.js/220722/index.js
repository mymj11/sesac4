// const { render } = require('ejs');
const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use('/abc/aa', express.static('public'));
// 가상경로 /abc/aa를 통해서만 public 파일을 열겠다.

app.get('/', (req,res) => {
    var list = ['apple', 'banana'];
    res.render('test', {list: list});
});
//     res.render('test', {a: 'aaa', b:'bbb'});
// });
// render은 확장자를 적지 않아도 된다.

app.listen(port, () => {
    console.log('Server port : ', port);
});