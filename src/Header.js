export default function Header(props) { //props아니어도 넣고싶은 이름 넣어도 되지만 관용적으로 props
    return (
        <header>
            <h1><a href='/' onClick={(e) => {
                e.preventDefault();
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}
//   export default Header;