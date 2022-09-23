import React, {useState} from "react";

function StateFunction2(){
    const [cnt, setCnt] = useState(0);

    function Increase(){
        setCnt(cnt+2)
    }

    function Decrease(){
        setCnt(cnt-1)
    }

    return(
        <div>
        <p>{cnt}</p>
        <button onClick = {Increase}>+2</button>
        <button onClick = {Decrease}>-1</button>
        </div>
    )
}
export default StateFunction2;





// 1. 함수형 컴포넌트를 만들어주세요.
// 2. 숫자의 초깃값은 0으로 설정해주세요.
// 3. Increase라는 함수를 만들고 1씩 증가하는 역할을 하도록 해주세요.
// 4. Decrease라는 함수를 만들고 2씩 감소하는 역할을 하도록 해주세요.