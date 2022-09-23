function Event() {
    function clickEvent(e){
        console.log(e);
    }
    function aClick(e){
        e.preventDefault();
        //#을 없애주는 함수??
        console.log("aClick");
        console.log(e);
    }
    return(
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default Event;