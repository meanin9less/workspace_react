import './App.css';
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
//컨퍼넌트가 리턴하는 태그는 반드시 하나의 태그로 묶여서 리턴되어야 함 제일 바깥의 div로 묶여서 보내짐
//   // className 으로 되어있음, 보기에는 html이지만 사실 jsx, 확장된 자바스크립트, 한페이지에서 html과 js를 구현할 수 있게 해줌
//   // 밑에 html코드들은 사실 실제 html코드는 아님 , 순수 html 코드로 변환과정을 거쳐서 랜더링
//   // 컴포넌트가 리턴하는 jsx는 바드시 하나의 부모요소로 감싸야한다.
//   // 자바스크립트 표현식을 작성하려면 jsx내부에서 코드를 {}로 감싸야함
//   // {} 표현식 안에서는 if(for)문 대신 삼항연산자를 사용해야한다.
//   // 안에서는 함수를 호출하는게 가능, 함수안에 넣으면 가능
//   // return 안이 jsx, return 밖에서는 가능
// 보통 파일하나에 컴포넌트 하나
function App() {
  //컴포넌트는 함수이기 때문에 ()매개변수 전달 가능
  //태그에서 속성값 넣듯이
  //ex)react라는 문자열 넘김, 속성이름 마음대로, 객체 형태로 전달됨 즉, 문자열이 담긴 객체
  //{title:"REACT", onChangeMode:()=>{alert("header")}};
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  //변수를 넘기는 거라 밑에 자바스크립트 영역표시 {} 쓰는거임
  // 속성처럼 만들어서 데이터나 함수를 전달가능
  return (
    <>
      <Header title="REACT" onChangeMode={() => { alert("Header"); }}></Header>
      <Nav topics={topics} onChangeMode={(id) => { alert(id); }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </>
  );
}





// function App(){
//   const loginYn = "Y"
//   return(
//     <>
//       {
//         (()=>{
//           if(loginYn==="Y"){
//             return(<div>홍창기입니다.</div>);
//           }else{
//             return(<div>비회원입니다.</div>);
//           }
//         })()//함수호출
//       }
//     </>
//   );
// }

// function App(){
//   const loginYn = "Y"
//   const test = ()=>{
//     if(loginYn==="Y"){
//       return(<div>홍창기입니다.</div>);
//     }else{
//       return(<div>비회원입니다.</div>);
//     }
//   }
//   return(
//     <>
//       {test()}
//     </>
//   );
// }

// function App(){
//   const style = {
//     backgroundColor:'green',
//     fontsize:`12px`
//   }
//   return(
//     <div style={style}>Hello, JinAh</div>
//   );
// }

// function App(){
//   const style = {
//         backgroundColor:'green',
//         fontsize:`12px`
//       }
//       return(
//         <div className='testClass'>Hello, JinAh</div>
//       )
// }

// function App() { //컴퍼넌트 호출한거임 시멘틱태그아님
//   const name="오지환";
//   return (
//     <div>
//       <Header></Header>
//       <Nav></Nav>   
//       <Article></Article>
//     </div>
//   );
//  }


export default App; //import 외부에있는걸 현재위치에 가져오는거
//export App컨퍼넌트를 외부로 보내는거
