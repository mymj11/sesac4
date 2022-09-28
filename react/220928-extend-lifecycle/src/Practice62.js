function App() {
    return (
        <div className="App">
        </div>
    );
}

export default App;

class Student{
    constructor(n, s, a, c){
        this.n = n;
        this.s = s;
        this.a = a;
        this.c = c;
    }
    getInfo(){
        return (this.n + ',' + this.s + ',' + this.a + ',' + this.c);
    }
    //쉼표 가로로 나열.

    // getInfo(){
    //     console.log(this.n);
    //     console.log(this.s);
    //     console.log(this.a);
    //     console.log(this.c);
    // }
    //세로로 나열.

    // getInfo(){
    //     console.log(this.n, this.s, this.a, this.c);
    // }
    //쉼표없이 띄어쓰기 가로로 나열.
}

class Kim extends Student{
    constructor(x, s, y, z){
        super(x,s,y,z);
        this.s = s;
    }
}

class Lee extends Student{
    constructor(q, s, w, e){
        super(q,s,w,e);
        this.s = s;
    }
}
//학교(s)는 동일하게 했음.

let Kim1 = new Student("김씨", "학교1", 20, 20);
console.log(Kim1.getInfo());

let Lee1 = new Student("이씨", "학교1", 21, 21);
console.log(Lee1.getInfo());
