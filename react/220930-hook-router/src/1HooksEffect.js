import { useState, useEffect } from "react";

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }

    const changeCnt = () => {
        setCnt(cnt + 1);
    }

    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name : ", name);
    // }, [cnt]);
    //아래와 같은 코드?
    //componentDidUpdate(preProps, prevState){
        //if(preState.name != this.state.name){
            //실행
        //}
    //}

    // useEffect()는 첫 번째는 함수 받고 두 번째는 선택 //mount와 update가 합쳐진 것.
    // 바뀔 때 실행할 수 있게 해준다.
    // 두 번째 인자로 [] 배열을 받았다. //[]에 검사하길 원하는 state 값을 넣어줌으로써 실행할 수 있다.
    // 두 번째 인자(parameter)는 업데이트를 관리하는 것.
    // []에 name을 입력해줘서 바뀔 때 실행되도록 했다. //name state가 업데이트될 때만 실행된다. //cnt는 바뀌지 않는다.
    // []에 cnt를 입력해줘서 바뀔 때 실행되도록 했다. //cnt state가 업데이트될 때만 실행된다. //name은 바뀌지 않는다.
    // [] 빈 배열은 렌더링 할 때만 사용되고 실행되지 않는다.

    //useEffect에는 뒷정리 함수가 있다.
    //컴포넌트가 업데이트되기 직전에 실행되는 함수.
    //그래서 직전값이 먼저 나오고 업데이트된 후에 직후값이 나온다.
    useEffect(() => {
        console.log("name1 : ", name);
        return () => {
            console.log("name2 : ", name);
        }
    }, [name]);
    //[count]로 하고 +1 버튼을 누르면 횟수가 증가한다.

    return (
        <div class = "1HooksEffect">
            <div class = "box">
                <input value={name} onChange={changeName} />
                {/* input에 name을 입력하면 onChange 이벤트가 발생하는데 setName이 되도록 함수를 입력해줬다. */}
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    )
}
//css
//.1HooksEffect .box{

//}

export default Hook;