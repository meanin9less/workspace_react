import './App.css';
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import ControlPanel from './ControlPanel'
import {useState} from 'react'
import Counter from './Counter';
import Create from './Create';

function App() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(0);
    const [topics, setTopics] = useState([
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
      ]);
    let content = null;
    if(mode === "WELCOME"){
        content = <Article title="Welcome" body="Hello, Web"></Article>
    }else if(mode === "READ"){
        let title, body;
        for(let topic of topics){
            if(topic.id === parseInt(id)){
                title = topic.title;
                body = topic.body;
                break;
            }
        }
        content = <Article title={title} body={body}></Article>
    }else if(mode === "CREATE"){
        content = <Create onCreate={(_title, _body)=>{
            console.log(_title, _body)
            let newTopic = {id:topics.length+1, title: _title, body: _body};
            let newTopics = [...topics, newTopic];
            setTopics(newTopics);
            setId(newTopic.id);
            setMode("READ");
            //topics안에는 배열의 위치값이 저장(참조값);
            //topics의 참조값은 변함이 없기 때문에 push 해도 state에서는 달라졌다고 안함
            //비동기 통합처리, submit될때 onCreate호출,
            //바로 app바로 호출 x 나중에(바뀐거 있으면 app호출 예약! 하는느낌)
        }}></Create>
    }

    return (
      <>
        <Header title="REACT" onChangeMode={() => {
            setMode("WELCOME");
         }}></Header>
        <Nav topics={topics} onChangeMode={(_id) => {
            setId(_id);
            setMode("READ");
         }}></Nav>
         {content}
         <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode("CREATE");
         }}>Create</a>
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

