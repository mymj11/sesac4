// : 타입 표기 (Type Annotation)
let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
//또는
let age: number | string;
age = 10;
age = 'a';
//모든 타입을 담을 변수를 사용하고 싶을 때는 any
let any: any;

//Array
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ['a','b','c','d'];
let arr3: Array<number> = [1,2,3,4,5];

//Tuple
//배열 길이와 타입이 지정되어 있는 경우
let arr4: [string, number] = ['str',1];

//Enum
//특정한 값들의 집합을 만들어 놓고 그 집합들 중 선택할 수 있게 하는 경우
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

//void
//함수에서 반환값이 없는 친구 / 변수에 사용할 때는 undefined와 null만 들어갈 수 있다.
let void1: void = undefined;
function void2(): void{
    console.log('11');
}

//never
//함수에 사용. 함수의 끝에 절대 도달하지 않는다.
// //절대 반환하지 않는 함수
// function neverEnd(): never{
//     while(true){

//     }
// }

let test: any; //모든 타입 허용
test = 1;
test = [1,2,3];

let test2: object; //기본 타입을 제외한 나머지 모두(array, tuple 등)
//test2 = 1; //에러
test2 = [1,2,3];

