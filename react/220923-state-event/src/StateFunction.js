import React, {useState} from "react";

function StateFunction(){
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    //useState라는 함수를 사용해 함수형 컴포넌트에서도 state를 사용할 수 있게 되었다.
    //msg state를 빈값으로 만든 것.
    //msg는 name list
    //setMsg는 msg라는 state를 변경하기 위해?
    //useState는 초기값?
    //useState 함수의 인자에는 상태의 초기값을 넣어줌.
    //함수를 호출하면 배열이 반환됨. 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔주는 함수. //세터(Setter)함수.
    //useState는 한 컴포넌트에서 여러 번 사용해도 상관없다.
    //state값을 바꾸어야 할 때는 setState나 useState를 통해 전달받은 세터함수를 사용해야 한다는 점을 주의하자.
    //state 값을 setState나 useState를 통해 바꾸어야 한다.

    //this.state{
        //msg: ""
    //}

    function changeMsg(){
        setMsg("메시지")
        //setState({msg: "메시지"})
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}
export default StateFunction;

//props와 state 둘다 컴포넌트에서 사용할 데이터를 담고 있지만,
//props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있다.
