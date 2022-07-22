const fs = require("fs").promises;

fs.mkdir("Sesac", (err) => {
    if (err) throw err;
});

async function exec(){
    await fs.writeFile("./Sesac/sesac.txt", "반갑습니다");
    await fs.copyFile("./Sesac/sesac.txt", "./Sesac/sesac2.txt");
    await fs.rename("./Sesac/sesac2.txt", "./Sesac/new.txt");
}
exec();

// Sesac 파일이 생성 => sesac.txt 생성, '반갑습니다' 쓰여짐 => sesac.txt을 복사해서 sesac2.txt 생성 
// => sesac2.txt를 new.txt로 이름 바꾸기(sesac2.txt가 new로 바뀜)