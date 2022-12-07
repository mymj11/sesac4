// 1. Cat과 Fish 클래스는 readonly 속성으로 name 변수를 갖는다.
// 2. Cat 클래스는 sayHello() 메서드를 가지며 울음소리 ("야옹")을 return한다.
// 3. Fish 클래슨느 dive() 메서드를 갖는데, 이때 dive 메서든느 숫자를 parameter(매개변수)을 받고,
// "~m 다이빙 했습니다."를 return한다.
// 4. Pet이라는 타입을 이용해 Cat과 Fish를 Union 타입으로 선언한다. //type Pet = Cat | Fish
// 5. talkPet(pet:Pet):string 함수는 instanceof를 이요해 Cat 클래스면 sayHello를 실행 후 출력,
// Fish 클래스면 "물고기는 말을 하지 못합니다."를 출력하세요.
// 6. talkPet()함수를 cat 한 번, fish 한 번을 보내서 총 2번 실행해주세요.


class Cat {
    readonly name: string;
    constructor(name:string) {
        this.name = name;
    }
    sayHello(): string {
        return "야옹";
    }
}

class Fish {
    constructor(readonly name:string){}
    dive(num:number): string {
        return `${num}m 다이빙했습니다.`;
    }
}

type Pet = Cat | Fish;
var cat1:Pet = new Cat('고양이');
var fish1:Pet = new Fish('물고기')

function talkPet(pet: Pet): string {
    if ( pet instanceof Cat ) { 
        return pet.sayHello();
    } else if ( pet instanceof Fish ) {
        return "물고기는 말을 하지 못한다.";
    }
    return "";
}
console.log( talkPet(cat1) );
console.log( talkPet(fish1) );


