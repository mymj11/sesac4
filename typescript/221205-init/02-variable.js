// : 타입 표기 (Type Annotation)
let str = 'hi';
let num = 1;
let flag = true;
//또는
let age;
age = 10;
age = 'a';
//모든 타입을 담을 변수를 사용하고 싶을 때는 any
let any;
//Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [1, 2, 3, 4, 5];
//Tuple
//배열 길이와 타입이 지정되어 있는 경우
let arr4 = ['str', 1];
//Enum
//특정한 값들의 집합을 만들어 놓고 그 집합들 중 선택할 수 있게 하는 경우
var Names;
(function (Names) {
    Names[Names["\uD64D\uAE38\uB3D9"] = 0] = "\uD64D\uAE38\uB3D9";
    Names[Names["\uCF54\uB529\uC628"] = 1] = "\uCF54\uB529\uC628";
    Names[Names["\uC0C8\uC2F9"] = 2] = "\uC0C8\uC2F9";
})(Names || (Names = {}));
;
let name1 = Names.홍길동;
name1 = Names.코딩온;
//void
//함수에서 반환값이 없는 친구 / 변수에 사용할 때는 undefined와 null만 들어갈 수 있다.
let void1 = undefined;
function void2() {
    console.log('11');
}
//never
//함수에 사용. 함수의 끝에 절대 도달하지 않는다.
// //절대 반환하지 않는 함수
// function neverEnd(): never{
//     while(true){
//     }
// }
let test; //모든 타입 허용
test = 1;
test = [1, 2, 3];
let test2; //기본 타입을 제외한 나머지 모두(array, tuple 등)
//test2 = 1; //에러
test2 = [1, 2, 3];
