export default function TopPlate({lights, currentTotal, lightOn}){
    return (
        <div className="top-plate">
            {lights.map((el) => 
            el === "second-screen" ? 
            <span className={el}>{currentTotal}</span> 
            : 
            el === lightOn ? 
            <span className="light" data-light-on>{el}</span> 
            :
            <span className="light">{el}</span>
            )
            }
        </div>
    )
}