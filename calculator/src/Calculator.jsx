import "./Calculator.css"
import TopPlate from "./TopPlate"
import { useState } from "react"

function choise(number, total, el){
    switch (el){
        case "+": return total + parseInt(number)
        case "-": return total - parseInt(number)
        case "*": return total * parseInt(number)
        case "/": return total / parseInt(number)
    }
}

export default function Calculator (){
    const buttons = [7,8,9,"/","C",4,5,6,"-","*", 1,2,3,"+", "=", 0,"00", "."]
    const lights = ["+", "second-screen", "-", "*", "/"]
    const [data, setData] = useState({num: "", total: 0, action: "+"})

    function calculate(el){
        if(typeof el === "number"){
            const newNumber = {...data, num: `${data.num}` + `${el}`}
            setData(newNumber);
        }

        else if(el === "="){
            let newTotal = choise(data.num, data.total, data.action)
            const update = {total: newTotal, num:"", action: ""}
            setData(update); 
        }
        else{
            if(data.action === ""){
                const newAction = {...data, action: el}
                setData(newAction)
            }
            else{
                let newTotal = choise(data.num, data.total, el)
                const update = {...data, total: newTotal, num:""}
                setData(update);
            }
            }
    }

    return (
        <div className="layout">            
            <TopPlate lights={lights} currentTotal={data.total} lightOn={data.action}/>
            <span className="screen">{data.num}</span>
            {buttons.map((el) => <button key={el} onClick={() => calculate(el)}>{el}</button>)}
        </div>
    )
}