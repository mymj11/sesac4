var a: number =  1;
//변수에 타입을 지정할 때는 :
console.log(a);

//변수
//키워드 변수이름: 타입 = 값;
var str1:string = '문자열';
var num1:number = 1;
var flag:boolean = true;
var any:any;
any = 1;
any = '문자';
any = false;
any = [];

var arr1: number[] = [1,2,3,4,5];
var arr2: string[] = ['a','b'];
//튜플 : 배열의 길이가 고정되어 있고 타입도 지정되어 있음 //각각의 자리에 미리 지정해두는 것
var arr3:[string, number] = ['1', 2];
var arr4:object = [1, 'a']; //배열이 확실하다면 object 타입을 지정해두면 된다?

enum Values {값1, 값2}; //지정한 값들 중에서만 선택할 수 있다.
var v1:Values;
v1 = Values.값1;

var v2:string|number|boolean; //타입들 중 하나로 지정할 수 있다.
v1 = 1;
v2 = 'a';
v2 = true;

//함수
/*
function 함수이름(매개변수: 타입) : 반환값타입{
    반환값
}
*/
function sum1(a,b){
    return a + b;
}
//변수에 타입을 지정해주지 않으면 오류가 난다.
console.log(sum1(1,'a'));
function sum2(a:number, b:number): number{
    return a + b;
}
console.log(sum2(1,2));
console.log(sum2(3,NaN)); //매개변수도 보내야 한다.

//매개변수를 보내기 싫다면 ?를 붙이면 된다. ?는 옵션 설정을 지정했다
function sum3(a:number, b?:number): number{
    return a;
}
console.log(sum3(1));
//매개변수를 두고 싶을 때 다음과 같이 해도 된다.
// function sum3(a:number, b=10): number{
//     return a + b;
// }
// console.log(sum3(1,3));
// console.log(sum3(1));

const func1 = (a:string) => {
    console.log("func1");
};
// var func1 = function(a){
//     console.log("func1");
// };
function func2(){
    console.log("func2");
}

//인터페이스
interface Student {
    name: string,
    age: number,
    nickname?: string //?는 nickname을 반드시 입력하지 않아도 오류가 나지 않게 한다.
};
var stu1:Student = {
    name: '이름',
    age : 10
}
var stu2:Student = {
    name: '이름2',
    age : 20,
    nickname: 'student2'
}


interface Shape {
    width: number;
    getLength(): number;
}
class Square implements Shape {
    width: number;
    constructor(w:number){
        this.width = w;
    }
    height: number; //class implements는 기존 규칙을 잘 지킨다면 속성을 추가해도 상관없다.
    getLength():number{
        return 0;
    }
}

//클래스
/*
class 클래스이름 {
    변수명1: 타입,; //이 클래스에서 사용할 변수를 constructor 밖에서 지정
    constructor(변수명: 타입, 변수명: 타입){
        this.변수명1 = 변수명;
    }
}
*/
interface Developer {
    name: string;
    getName(): string;
}
class Developer1 implements Developer{
    readonly name: string; //이 클래스에서 this.name을 쓸건데 그 타입이 string이다. readonly는 고정지정? 값 변경 불가능
    constructor(name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
}
var dev1 = new Developer1("새싹");
//dev1.name = "SeSAC"; //"새싹"에서 "SeSAC"으로 이름 변경하고 싶었지만 위의 readonly때문에 오류 발생
console.log(dev1.getName()); 

class Developer2{
    constructor(readonly name: string){}
    getName(): string{
        return this.name;
    }
}
var dev2 = new Developer2("코딩온");
console.log(dev2.getName());

var abc = 1;
console.log(typeof(abc));

//타입 검사
//ptimitive type => typeof
//object type => instanceof
if (dev2 instanceof Developer1){

}

//any는 예측이 힘들기 때문에 사용하지 않는 것이 좋다.

//제네릭(Generics)
//재사용성을 높이기 위해서  //여러 가지 동작을 사용하기 위해서?
//Array<number> = number[]
//Array<>
//const [age, setAge] = useState<number>(0)

//이 함수를 불러올 때 지정
function getText<S>(text:S) : S {
    return text;
}
getText<number>(1);
getText<string>('a');
getText(1); //타입을 무조건 지정해야하는 것은 아니다.