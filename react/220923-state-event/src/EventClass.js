import React, {Component} from "react";

class EventClass extends Component{

    constructor(props){
        super(props);

        this.printConsole = this.printConsole.bind(this);
        //함수 안에서 this를 하고 싶으면 constructor에서 bind를 해주거나 화살표 함수 이용하기.
    }
    printConsole(msg) {
        console.log("printConsole");
        console.log(msg);    
        console.log(this);    
    }
    printConsole2= () => {
        console.log("printConsole2");
        console.log(this);    
    }
    //함수 사용할 때는 소괄호 없이 이름만, 핸들링해서 보내기.
    sendParameter = () => {
        this.printConsole('2')
    }
    //인자는 안에서 보낸다.

    render() {
        return(
            <div>
                <button onClick={this.sendParameter}>printConsole</button>
                {/* <button onClick={() => {
                        this.printConsole('2')
                    }}>printConsole</button> */}
                {/* 화살표 함수 문법을 쓰면 bind하지 않아도 된다. */}
                <button onClick={this.printConsole2}>printConsole2</button>
                {/* this 붙혀서 명확하게 찾고 싶은 것을 선택해야 한다. */}
            </div>
        )
    }
}

export default EventClass;