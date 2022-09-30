import {useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case "INCREMNET":
            return{value: state.value +1};
        case "DECREMNET":
            return{value: state.value -1};
        default:
            return state;
    }
}
// state에는 value라는 키가 있고 이 상태로 전달.

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    //{value: 0}은 상태의 기본값. 초기값 //state.value =0인 상태
    //dispatch는 무언가 행동을 할 수 있게 해주는 함수. //함수가 반환되는 것.
    //여기서 reducer는 위의 reducer 함수를 불러오는 것.
    return(
        <div>
            <h1>{state.value}</h1> 
            {/* {state.value}는 현재 상태 값. */}

            <button onClick={() => {dispatch({type: "DECREMNET"})}}>-1</button>
            <button onClick={() => {dispatch({type: "INCREMNET"})}}>+1</button>
            {/* dispatch에는 action을 보낸다. */}
            {/* {type: "DECREMNET"}는 내가 dispatch에 전달한 action */}
        </div>
    )
}

export default Reducer;