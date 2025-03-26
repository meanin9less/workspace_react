import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //import ./App에 있는 App를 포함하겠다.
import reportWebVitals from './reportWebVitals';
//root라는 div태그를 root로 삼는 reactDOM을(가상돔을) 만들겠다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //root안에 하위내용을 랜더링하겠다. App는 컨퍼넌트, 함수임 html 태그들을 만들어내는 함수, 만들어낸다는건 리턴한다는것
  //컨퍼넌트 = 태그들을 만들어서 리턴해주는 함수, 컨퍼넌트를 호출할때는 아래와 같은 모양으로 호출
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
