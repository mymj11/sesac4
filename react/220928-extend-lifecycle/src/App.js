function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

class Shape {
  constructor(w, h){
    this.w = w;
    this.h = h;
  } //render를 실행시켜라가 포함되어 있음?
  getArea(){
    return this.w * this.h;
  }
}
class Square extends Shape{
} 
// extends가 있다는 것은 실행이 된다는 것.

class Triangle extends Shape{
  constructor(x,y,name){
    super(x,y);
    // 부모의 constructor를 상속받지 않고 자식 마음대로. 즉 부모를 덮어쓴다.
    // constructor는 덮어쓸 수 없다. 그래서 super를 써준다.
    this.name = name;
  }
  getArea(){
    return this.w * this.h/2;
  }
}
// 자식 꺼가 먼저 사용됨. 함수는 덮어쓸 수 있다.

let Shape1 = new Shape(5,4);
console.log(Shape1.getArea());

let Shape2 = new Shape(2,3);
console.log(Shape2.getArea());

let Shape3 = new Shape(4,8);
console.log(Shape3.getArea());

let Shape4 = new Triangle(5,6, 'test');
console.log(Shape4.getArea());



// import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return(
//       <div>
//     <ScrollBox ref={(ref) => this.ScrollBox=ref} />
//     <button onClick={() => this.ScrollBox.scrollBottom()}>맨 밑으로</button>
//   </div>
//     )
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';

// class App2 extends Component {
// render() {
// return(
// <div>
// <ScrollBox ref={(ref) => this.ScrollBox=ref} />
// </div>
// )
// }
// }

// export default App2;
