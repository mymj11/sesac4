/*
    function 함수이름 (변수명:타입) : 반환타입 {}
*/
//ES6(ES2015)에서 새로나온 문법 : 화살표 함수, class...
// var tetfunction = () => {
//     return 'test';
// }
// console.log(tetfunction());
const tetfunction = () => {
    return 'test';
};
console.log(tetfunction());
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 'a'));
console.log(sum1(1, null));
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
function sum3(a, b) {
    return a + b;
}
console.log("sum3 : ", sum3(1));
// function sum1(a,b){
//     return a + b;
// }
// console.log(sum1(1,'a'));
// console.log(sum1(1, null));
// function sum2(a:number, b:number):number{
//     return a + b;
// }
// console.log(sum2(1,2));
// function sum3(a:number, b?:number){
//     return a + b;
// }
// console.log("sum3 : ", sum3(1));
let person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
function getInfo2(obj) {
}
let person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
let loginUser = (id, pw) => {
    return true;
};
class MyBook {
    constructor() {
        this.date = '2022-12-05';
    }
    getInfo() {
        console.log("정보");
    }
    changeTitle(newTitle) {
    }
}
