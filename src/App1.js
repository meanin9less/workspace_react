import './img/1.webp'
export default function App1() {
  return (
    <>
      <Header1></Header1>
      <Nav1 info={info}></Nav1>
      {/* <Article></Article> */}
    </>
  );
}

const info = [
  {title: "네이버", link:"https://naver.com", image:'/img/1.webp'},
  {title: "구글", link:"https://google.com", image:'/img/2.webp'},
  {title: "쿠팡", link:"https://coupang.com", image:'/img/3.webp'}
];

function Header1(){
  return(
    <>
        <h1>헤더컨포넌트를만들었습니다힘들어요</h1> 
    </>
  )
}
function Nav1(props){
  const infoArr = props.info;
  const link = [];
  const image = [];
  for(let i = 0; i<infoArr.length; i++){
    link.push(<li key={i}><a href={infoArr[i].link}>{infoArr[i].title}</a></li>);
    image.push(<img key={i} src={infoArr[i].image}></img>);
  }
  return(
    <>
    <ul>
      {link}
    </ul>
    <div>
      {image}
    </div>
    </>
  )
}