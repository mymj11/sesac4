import React, {useState} from 'react';
function App(){
  const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);
  function filterCheck(){
    let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
    let newLists = [...lists, 'dog'];
    //push로 했던 것을 전개 연산자(...)를 사용해서 해줘야 한다.
    
    let newList = [];
    for(let i = 0; i < lists.length; i++){
      if(lists[i].length > 4) newList.push(lists[i]);
    }

    let result = lists.filter((value) => {
      return value.length > 4;
    })
  }

  function addElement(){
    console.log([...list, 's']);
    setList([...list, 's']); //전개 연산자를 써야한다.
    //list.push('s'); //틀림
    //push는 list에 요소 추가하는 것. //단, 변화를 인지하지 못하기 때문에 push를 쓰면 안 된다.??

    let newList = [];
    for (let i = 0; i < list.length; i++){
      console.log(i);
      console.log(list[i]); //list[i] 형태로 가져옴.
      newList.push(i + list[i]);
    }//for문 이용해서 list 가져오기?
    newList = list.map((value, i) => {
      console.log(i);
      console.log(value);
      //각각 값과 인덱스가 담겨오는 것.
      return i + value;
      //map의 콜백함수로 보낼 때 return을 하면
      //return을 시킨 것으로 새로운 배열을 만든다.
    })
    console.log(newList);
  }

  return(
    <div>
      {list}
      <ul>
        {list.map((name, i) => {
          return <li key={"li_" + i}>{name}</li>
          //key를 반드시 넣어줘야 한다.
        })}
      </ul>
      <ul>
        {list.filter((name) => {
          return name.includes("a");
        })}
      </ul>
      <button onClick = {addElement}>추가</button>
    </div>
  );
}

export default App;

//filter는 component를 바로 보여주기 위해서 사용하진 않는다.