const fs = require("fs");

fs.readFile("./text.txt", (err,data) => {
    if (err) throw err;

    console.log(data);
    console.log(data.toString());
})

// fs.readFile("./test.txt", function(err, data){
//     if (err) throw err;
//     // 에러를 해결하기 위해 throw(던지다)사용
//         console.log(data);

//         console.log(data.toString());
// });
// 문자열로 내 눈에 보이게 하기 위해 toString
// 파일 읽어오기