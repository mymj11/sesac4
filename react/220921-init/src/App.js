import './App.css';

function App() {
  const flag = true;
  var name = "";
  if(flag) name = "SeSAC";
  else name = "문래";

  // const style = {
  //   backgroundColor: "yellow",
  //   color: "blue"
  // }

  return (
    <div className = "test" style = {{
      backgroundColor: "yellow",
      color: "blue"
    }}>
      {name}
      {flag && (<h1>True</h1>)}
    </div>
  );
}
//style 객체를 미리 선언하고 div의 style 값으로 지정해줌.
//미리 선언하지 않고 바로 style 값을 지정함.

export default App;


//JSX에서 Javascript를 쓸 때 {}

//삼항 연산자는 ?와 :으로 이루어진다.
//{ 조건 ? (a) : (b) }
//{flag ? (<h1>True</h1>):<h2>False</h2>}
//참이면 a가 실행, 거짓이면 b가 실행됨.
//한 가지 조건에 대해서만 처리하고 싶다면
//예를 들어 참일 경우만 나타내고 싶다면 { 조건 && (참 내용)}

//모든 코드는 닫아야 한다.
//<br />하면 엶과 동시에 닫은 것.




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
