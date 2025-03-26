import './App.css';
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import ControlPanel from './ControlPanel'
import {useState} from 'react'
import Counter from './Counter';
import Create from './Create';
import Update from './Update';

function App() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(0);
    const [topics, setTopics] = useState([
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
      ]);
    const [nextId, setNextId] = useState(topics.length+1);

    let content = null;
    let contextControl = null;
    if(mode === "WELCOME"){
        content = <Article title="Welcome" body="Hello, Web"></Article>
    }else if(mode === "READ"){
        let title, body;
        for(let topic of topics){
            if(topic.id === Number(id)){
                title = topic.title;
                body = topic.body;
                break;
            }
        }
        content = <Article title={title} body={body}></Article>
        contextControl = 
        <>
        <li><a href={'/update/'+ Number(id)} onClick={(e)=>{
            e.preventDefault();
            setMode("UPDATE");
        }}>Update</a></li>
        <li><button onClick={(e)=>{
            const filterTopics = topics.filter((t)=>t.id !== Number(id));
            setTopics(filterTopics);
            setMode("WELCOME");
        }}>Delete</button></li>
        </>
    }else if(mode === "CREATE"){
        content = <Create onCreate={(_title, _body)=>{
            let newTopic = {id:nextId, title: _title, body: _body};
            let newTopics = [...topics, newTopic];
            setTopics(newTopics);
            setId(newTopic.id);
            setNextId(nextId+1);
            setMode("READ");
            //topics안에는 배열의 위치값이 저장(참조값);
            //topics의 참조값은 변함이 없기 때문에 push 해도 state에서는 달라졌다고 안함
            //비동기 통합처리, submit될때 onCreate호출,
            //바로 app바로 호출 x 나중에(바뀐거 있으면 app호출 예약! 하는느낌)
        }}></Create>
    } else if(mode === "UPDATE"){
        let topic = topics.find((t)=> t.id === Number(id));
        //filter 배열리턴, find 인덱스값 하나 리턴
        // for(let t of topics){
        //     if(t.id === Number(id)){
        //         topic = t;
        //         break;
        //     }
        // }
        content = <Update title={topic.title} body={topic.body} onUpdate={(title, body)=>{
            const updateTopic = {id:Number(id), title:title, body:body} //{id:id, title:title, body:body}
            const updateTopics = [...topics];
            for(let i = 0; i<updateTopics.length; i++){
                if(updateTopics[i].id === Number(id)){
                    updateTopics[i] = updateTopic;
                    break;
                }
            }
            // newTopics.map()
            setTopics(updateTopics);
            setMode("READ");
        }}></Update>
    }

    return (
      <>
        <Header title="REACT" onChangeMode={() => {
            setMode("WELCOME");
         }}></Header>
        <Nav topics={topics} onChangeMode={(_id) => {
            setId(Number(_id));
            setMode("READ");
         }}></Nav>
         {content}
         <li><a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode("CREATE");
         }}>Create</a></li>
         {contextControl}
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

