import React, {Component} from 'react';

class StateClass extends Component {
    // constructor(props) {
        //컴포넌트에 state를 설정할 때 constructor 메소드를 자성하여 설정.
        //constructor는 컴포넌트의 생성자 메서드
        //state의 초기값을 지정하기 위해 constructor 메소드를 선언.
    //     super(props);
        //클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해줘야 한다.
        //super는 부모의 contructor 실행 //상속받은 부모 객체를 실행
        //부모있는 함수를 쓰고 싶다면 super.함수() 쓰면 된다.

    //     this.state = {
    //         name: "SeSAC", //초기값 설정.
    //         list: ['s','e','s','a','c']
    //     };
    // }
    //이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해줌.
    

    //state만 쓰고 싶을 때 //props를 거쳐서 가져올 필요가 없을 때?
    //constructor 메서드를 선언하지 않고도 state의 초기값을 설정할 수 있다.
    state = {
                name: "SeSAC",
                cnt:  0,
                list: ['s','e','s','a','c']
    };

    render(){
        return(
            <div>
                <div>{this.state.name} StateClass {this.state.cnt}</div>
                {/* render 함수에서 현재 state를 조회할 때 this.state를 사용. */}
                <button onClick = {()=>{
                    //button 안에 onClick이라는 값을 props로 넣어줌. 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 도와줌.
                    //이벤트로 설정할 함수를 넣어줄 때는 화살표 함수 문법 사용.
                    //onClick={( ) => { }}

                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});
                    //this.setState를 사용하여 state 값을 업데이트 할 때는 상태가 비동기적으로 업데이트 된다.
                    //this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 2가 아닌 1씩 더해질 것이다.
                    //비동기 처리 : 바로 처리가 되지 않는다.
                    //그래서 청년취업사관학교가 처리되지 않고 넘어가기 때문에 2가 아니라 1이 된다.
                    //this.setState를 사용한다고 해서 state값이 바로 바뀌지는 않기 때문이에요.
                    //이에 대한 해결책으로 this.setState를 사용할 때 함수를 인자로 넣어줄 수 있어요.

                    //cnt를 2번 눌러서 2가 되게 하고 싶다면
                    //setState를 연속해서 순서대로 실행하고 싶다면 함수를 넣어줘야 한다. //많이 쓰이는 문법은 아니다.
                    //this.setState의 인자로 함수를 넣어줄 때는다음과 같은 형식으로 작성.
                    //prevState는 기존 상태이고, props는 현재 지니고 있는 props
                    //업데이트하는 과정에서 props가 필요하지 않다면 생략가능.
                    this.setState(prevState => {
                        //기존 상태를 가져온다.
                        return{cnt: prevState.cnt + 1}
                    });
                    //여기서 state 상태를 바로 바꾸고 다음으로 넘어가는 것.
                    this.setState(prevState => {
                        return{cnt: prevState.cnt + 1}
                    });
                    //setState 함수를 사용할 때는 화살표 함수에서 바로 객체를 반환하도록 했기 때문에 prevState=>({})와 같이 작성한 것.
                    //2씩 넘어가게 된다.
                }}>클릭</button>
                {/* setState는 name을 청년취업사관학교로 바꿔라. -> SeSAC값이 바뀜. 내가 바꾸고 싶은 것을 바꿔줌.*/}
                <button onClick = {()=>{this.setState({list: ['c','l','i','c','k']})}}>클릭2</button>
                {/* this.setState 함수는 state 값을 바꿔줌. 인자로 전달된 객체 안에 들어있는 값만 바꿔줌.*/}
                <ul>
                    {this.state.list.map((txt) => {
                        // map은 JSX에서 반복문 돌릴 때 사용.
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        )
    }

}
export default StateClass;

//var car = new Car();
//car1.getName();

// class Car {
//     constructor(){
//         this.name = "자동차";
//     }
// }