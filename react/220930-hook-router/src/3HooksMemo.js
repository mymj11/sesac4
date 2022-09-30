import {useState, useMemo, useEffect, useCallback, useRef} from 'react';

function getAverage(list){
    console.log("getAvergae");
    var sum = 0;
    if (list.length == 0) return sum; //0이라는 값을 기억하고 있다가
    for( let i = 0; i < list.length; i++){
        sum = sum +i;
    }
    return sum / list.length;
}
//rerender될 때마다 getAverage가 실행. 
//input에 값을 입력할 때마다 컴포넌트 안의 내용들이 다시 읽히면서 콘솔창에 엄청 뜸.
//등록할 때마다 앞에 등록한 수들도 콘솔창에 다 나와버리니까??
//rendering할 때마다 함수가 선언되니까
//그래서 state에 담아줘야 한다? 함수를 한번만 선언하겠다. 어차피 같은 함수니까.//useMemo()사용.

const Memo = () => {
    console.log("memo")
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef(null);

    // const onChange = e => {
    //     console.log("onChange");
    //     setNum(e.target.value);
    // }
    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0);
    // }

    //useCallback은 함수를 반환한다.
    //rerender할 때 함수를 기억해서 호출.
    // const onChange = useCallback(e => {
    //     setNum(e.target.value);
    // }, []);
    //첫 번째로 받은 콜백함수를 반환해줌.
    //반환해주는 함수는
    // const onChange = e => {
    //     setNum(e.target.value);
    // }, []); 이다.
    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum("");
        input.current.focus();
    }, [num, list]);
    //state를 안 쓰는 경우 한 번만 쓰기 위해서? 콜백함수 사용?
    //num을 써줘야 한다.

    // const avg = useMemo(() => getAverage(list), [list]);
    //list가 바뀔 때만 원하는 값이 바뀔 때만 getAverage 실행해라. 
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]);

    return(
        <div>
            <input value={num} onChange={onChange} ref={input} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}> {v} </li>
                })}
            </ul>

            <div>
                <b> 평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;