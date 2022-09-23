import React, {Component} from 'react';

class StateClass2 extends Component {

    state = {
        cnt:  0
    };

    render(){
            return(
                <div>
                    <p>{this.state.cnt}</p>
                    {/* 보여줄 값 */}
                    <button onClick = {()=>{this.setState({cnt: this.state.cnt + 2})}}>+2</button>
                    <button onClick = {()=>{this.setState({cnt: this.state.cnt - 1})}}>-1</button>
                </div>
            )
        }
    }
export default StateClass2;

// 1. 클래스형 컴포넌트를 만들어주세요.
// 2. 숫자의 초깃값은 0으로 설정해주세요.
// 3. +2 라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 2씩 증가하도록 해주세요.
// 4. -1 이라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 1씩 감소하도록 해주세요.
