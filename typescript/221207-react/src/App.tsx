import React, {useState} from 'react';

type AppProps = {
  name: string;
  age?: number;
}

function App(props:AppProps) {
  const [list, setList] = useState<number[]>([]); //타입을 제네릭을 이용해 숫자 배열로 지정
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;
