import "./Calculator.css"

export default function Calculator (){
    const buttons = [7,8,9,"/","C",4,5,6,"-","*", 1,2,3,"+", "=", 0,"00", "."]
    return (
        <div className="layout">
            <span className="screen">356</span>
            {buttons.map((el, ind) => <button key={ind} className={ind}>{el}</button>)}
        </div>
    )
}