import React, {useState} from "react";

const Event_ex = () => {
// const[names, setNames, email] = useState([
//     {id:1, text: '코디', email: 'codi@gmail.com'},
//     {id:2, text: '윤소희', email: 'yoonsohee@gmail.com'}
// ]);
const[info, setInfo] = useState([
    {id:1, name: '코디', email: 'codi@gmail.com'},
    {id:2, name: '윤소희', email: 'yoonsohee@gmail.com'}
]);

const [inputText, setInputText] = useState( '' );
const [nextId, setNextId] = useState(3); //초기화 //Id는 한 번만해도 된다.
const onAddname = (e) => setInputText(e.target.value);

const [inputText2, setInputText2] = useState( '' );
const onAddemail = (e) => setInputText2(e.target.value);

const onClick = () => {
    const nextNames = info.concat({
        id: nextId,
        name: inputText,
        email: inputText2
    });
    setNextId(nextId + 1);
    setInfo(nextNames);
    setInputText( '' );
    setInputText2('');
}

const onRemove = id => {
    const nextNames = info.filter(a => a.id !== id);
    setInfo(nextNames);
}

const nextNames = info.map(a => <h3 key={a.id} onDoubleClick={() => onRemove(a.id)}>{a.name}:{a.email}</h3>);
//여기서 a는 화살표 함수의 매개변수

const onKeyPress=(e) => {
    if(e.key == 'Enter'){
        onClick();
    }
}

return (
    <div>
        <input value={inputText} onKeyPress={onKeyPress} onChange={onAddname} placeholder="이름"></input>
        <input value={inputText2} onKeyPress={onKeyPress} onChange={onAddemail} placeholder="이메일"></input>
    
        <button onKeyPress={onKeyPress} onClick={onClick}>등록</button>
        
        <ul>
            {nextNames}
        </ul>
    </div>
    );
};
export default Event_ex;


//실습1
// 1. src 디렉터리 안에 ex 라는 폴더를 만들고, ex 폴더 안에 Event_ex.js 라는 파일을 생성하세요.
// 2. Event_ex는 함수형 컴포넌트로 만들어주세요.
// 3. 2개의 input을 만들고 각각 이름과 이메일을 받도록 해주세요.
// 4. "등록"이란 버튼을 클릭했을 때 사용자가 입력한 이름과 이메일이 아래에 추가되도록 해주세요.
// 5. 사진과 같이 코디와 윤소희의 정보가 미리 입력되어 나타나게 해주세요.

//실습2
// 1. 두 번째 input에서 Enter를 눌렀을 때 아래에 정보가 추가되도록 해주세요.
// 2. 정보를 더블클릭했을 때 해당 정보가 삭제되도록 해주세요.