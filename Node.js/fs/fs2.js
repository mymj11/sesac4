const fs = require("fs").promises;

// fs.writeFile('./write.txt', '안녕',)
// // appendFile
//     .then(() => {
//         console.log("작성 완료");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     // 파일 새로 만들기 write라는 새 파일이 생기고 '안녕'이라고 작성되어 있을 것이다.

//     fs.copyFile("./write.txt", "./new.txt")
//         .then(() => {
//             console.log("복사 완료");
//         })
//         .catch((err) => {
//             console.log(err);
//         });

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();

// new2 파일이 생기고 '안녕'이라고 쓰여져 있을 것이다.