import React, {Component, createRef} from "react";

class Ref extends Component{
    event1(){
        let input = document.getElementById("input1");
        //Id로 document 선택해서 불러오기.
        console.log(input.value);
    }
    event2 = () => {
        console.log(this.input.value);
    }
    input3 = React.createRef(); //내장함수.
    event3 = () => {
        console.log(this.input3.current.value); //current에 요소가 들어간다.
    }
    //class에서는 화살표 함수를 써야한다!!!!

    render(){
        return(<>
        <div>
            <input type="text" id="input1" />
            <button onClick={this.event1}>버튼</button>
            {/* this.를 해줘야 event1이 정의된다. */}
        </div>
        <div>
            {/* 콜백함수? this.input = */}
            <input type="text" ref={(ref) => {this.input = ref}} />
            {/* class 안의 input 태그 */}
            <button onClick={this.event2}>버튼2</button>
        </div>
        <div>
            <input type="text" ref={this.input3} />
            <button onClick={this.event3}>버튼3</button>
        </div>
        </>);
    }
}

export default Ref;