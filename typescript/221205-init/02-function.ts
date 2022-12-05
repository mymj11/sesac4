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
}
console.log( tetfunction() );
function sum1(a,b) {
    return a + b;
}
console.log( sum1(1,'a') );
console.log( sum1(1, null) );
function sum2( a:number, b:number ):number {
    return a + b;
}
console.log( sum2(1,2) );
function sum3( a:number, b?:number ) {
    return a + b;
}
console.log( "sum3 : ", sum3(1 ) );

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

let person = {name:'코딩온', age: 10};
function getInfo(obj: {name:string, age: number}){

}
interface PersonData{
    readonly name: string;
    age: number;
    nickname?: string;
}
function getInfo2(obj: PersonData){

}

let person2:PersonData = {name:'코딩온', age: 10};
person2.age = person2.age + 1;

interface login {
    (id: string, pw: string):boolean
};
let loginUser:login = (id,pw) => {
    return true;
}
interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}
class MyBook implements Book{
    title: '책';
    date = '2022-12-05';
    getInfo(){
        console.log("정보")
    }
    changeTitle(newTitle: string): void {
        
    }
}
