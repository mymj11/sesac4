class Car {
    constructor( color ){
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }
    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
}

module.exports = {Car};

var car0 = new Car("red");
var car1 = new Car("red");
var car2 = new Car("red");
var car3 = new Car("red");
var car4 = new Car("red");
var car5 = new Car("red");

