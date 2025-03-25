function Nav(props) { // props = {topics:[{},{},{}], onChangeMode:(id)=>{alert(id);}}
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
            //onChangeMode(e.target.id)에서 id가 넘어가면 속성값이기 때문에 문자열 1,2,3 중 하나가 넘어감
            // props.onChangeMode(e.np,target.href); 서버주소+경로까지 출력
        }}>{t.title}</a></li>);
    } //for문에서 태그만들때  식별자 키를 하나씩 넣어줘야 함
    //lis 배열안에 엘리먼트 들어가면 알아서 랜더링됨
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
} 
export default Nav;