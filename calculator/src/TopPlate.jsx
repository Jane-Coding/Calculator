export default function TopPlate({lights, currentTotal, lightOn}){
    return (
        <div className="top-plate">
            {lights.map((el) => 
            el === "top-screen" ? 
            <span className={el}>{currentTotal}</span> 
            : 
            el === lightOn ? 
            <span className="light" data-light-on><p>{el}</p></span> 
            :
            <span className="light"><p>{el}</p></span>
            )
            }
        </div>
    )
}