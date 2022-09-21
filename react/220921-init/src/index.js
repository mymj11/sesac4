import React from 'react';
import ReactDOM from 'react-dom/client';
//React, ReactDOM는 불러오는 것.
import ClassComponent from './ClassComponent';
// import './index.css';
import App from './App';
//App.js에서 export default App;(내보낸 값)을 가져오기(import)
//그럼 export default App;에서 App은 APP.js에서 App()이고 return하니까? return()

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.createRoot()는 가장 바깥쪽에 요소를 만들겠다.
//'root'는 public-index.html에 있다.
root.render(
  <>
    <ClassComponent name = {1} location="문래">문자</ClassComponent>
    {/* 태그 사이의 내용을 children이라고 한다. */}
    {/* 숫자만 쓰고 싶을 때는 {}를 써줘야 한다. */}
    {/* <ClassComponent name="SeSAC" location="문래" /> */}
    <App />
  </>
  //내가 보여줄 component
  //React.StrictMode는 문제가 있는지 알아보는 도구. 검사, 경고. 쓰지 않아도 된다. <React.StrictMode></React.StrictMode>
  //root.render()의 내용이 index.html <div id="root">여기에 들어감!</div>1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
//성능 측정 //쓰지 않아도 된다.

//index.js는 메인 프로그램.

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// ); 
//이렇게 써도 무방하다.
