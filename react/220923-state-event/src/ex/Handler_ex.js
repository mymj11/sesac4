import React, {Component} from 'react';

class Handler_ex extends Component {
    state = {
        txt: "Hello World!"
    };
    render(){
        return(
            <div>
                <div>{this.state.txt}</div>
                <button onClick = {()=>{this.setState({txt: "Goodbye World!"})}}>클릭</button>
            </div>
        )
    }
}
export default Handler_ex;


// 1. src 디렉터리 안에 ex 라는 폴더를 만들고, ex 폴더 안에 Handler_ex 라는 파일을 생성하세요.
// 2. Handler_ex 컴포넌트는 클래스형 컴포넌트로 만들어주세요. 
// 3. state의 초기값을 Hello World!로 지정해주세요.
// 4. 버튼을 하나 만들고, 버튼을 클릭했을 때 Hello World!가 Goodbye World! 로 변경되도록 이벤트를 지정해주세요.
