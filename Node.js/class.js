class Cat {
    constructor(name){
        this.name = name;
        // 여기서 this는 class 자체를 의미한다.
    }
    mew(){
        console.log(this.name + "야옹");
    }
}

var cat1 = new Cat("나비");
var cat2 = new Cat("냥이");
console.log(cat1);
cat1.mew();
cat2.mew();
