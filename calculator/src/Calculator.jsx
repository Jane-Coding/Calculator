import "./Calculator.css"
import TopPlate from "./TopPlate"
import {choise} from "./utility"
import { useState } from "react"

export default function Calculator (){
    const buttons = [7,8,9,"/","C",4,5,6,"-","*", 1,2,3,"+", "=", 0,"00", "."]
    const lights = ["+", "second-screen", "-", "*", "/"]
    const [data, setData] = useState({num: "", total: 0, action: ""})

    function calculate(el){
        if(typeof el === "number"){
            setData(newNumber => ({...data, num: `${data.num}` + `${el}`}));
        }
        else if(el === "="){
            let newTotal = choise(data.num, data.total, data.action)
            setData(update =>({num:"", total: newTotal, action: ""})); 
        }    
        else if(el === "C"){
            setData({num: "", total: 0, action: ""})
        }
        else{
            if(data.total === 0){
                setData(addTotal => ({num: "", total: parseInt(data.num), action: el}))
            }
            else if (data.action === ""){
                setData(newAction => ({...data, action: el}))
            }
            else{
                console.log(data);
                let newTotal = choise(data.num, data.total, data.action)
                setData(update => ({num:"", total: newTotal, action: el}));
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