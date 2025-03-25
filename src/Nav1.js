import {useState} from "react";

function Nav1(props) {
    const [inputName, setinputName] = useState()
    const infoArr = props.info;
    const link = [];
    for (let i = 0; i < infoArr.length; i++) {
      link.push(<li key={i}><a href={infoArr[i].link}>{infoArr[i].name}</a></li>);
    }
    return (
      <>
      <Search searchResult={(inputValue)=>{
            link.filter(()=>)
      }}></Search>
        <ul>
          {link}
        </ul>
      </>
    )
  }
  export default Nav1;