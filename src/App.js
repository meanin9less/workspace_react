import './App.css';
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import ControlPanel from './ControlPanel'
import {useState} from 'react'
import Counter from './Counter';
function App() {
    const [mode, setMode] = useState("WELCOME");
    const topics = [
      { id: 1, title: "html", body: "html is ..." },
      { id: 2, title: "css", body: "css is ..." },
      { id: 3, title: "javascript", body: "javascript is ..." },
    ];
    let content = null;
    if(mode === "WELCOME"){
        content = <Article title="Welcome" body="Hello, Web"></Article>
    }else if(mode === "READ"){
        content = <Article title="Welcome" body="Hello, READ"></Article>
    }

    return (
      <>
        <Counter></Counter>
        <Header title="REACT" onChangeMode={() => {
            setMode("WELCOME");
         }}></Header>
        <Nav topics={topics} onChangeMode={(id) => {
            setMode("READ");
         }}></Nav>
         {content}
      </>
    );
  }
export default App;

// function App() {
//     function handleClick() {
//         alert("버튼을 클릭했습니다.");
//     }
//     return (
//         <>
//             <div>
//                 <button onClick={handleClick}>버튼클릭</button>
//             </div>
//             <div>
//                 <ControlPanel></ControlPanel>
//             </div>
//         </>
//     )
// }
// export default App;
//children = 특별한 키워드
//<ControlButton massage="음악을 재생합니다.">asd</ControlButton>
// children 은 안에 asd를 받는 props

