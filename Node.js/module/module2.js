const url = require("url");
const {URL} = url;
const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9";
const naver = new URL(string);

const params = new URLSearchParams(naver.search);
for (const name of params.keys()){
    console.log(name);
}

console.log(params.values());
// 위의 URL에서 모든 키 가져오기
// 위의 URL에서 모든 값 가져오기

params.delete("sm");

console.log(params.keys());


// 위의 URL에서 sm 키를 삭제하고 1을 이용해 모든 키 가져오기
