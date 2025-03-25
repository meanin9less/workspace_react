function ControlButton({massage, children}) {
    return <button onClick={()=>{alert(massage)}}>{children}</button>
}
function ControlPanel() {
    return (
        <>
            <ControlButton massage="음악을 재생합니다.">Play</ControlButton>
            <ControlButton massage="재생을 중지합니다.">Stop</ControlButton>
        </>
    );
}
export default ControlPanel;