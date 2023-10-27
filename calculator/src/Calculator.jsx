import "./Calculator.css"
import TopPlate from "./TopPlate"
import {choise} from "./utility"
import { useState } from "react"

export default function Calculator (){
    const buttons = [7,8,9,"/","C",4,5,6,"-","*", 1,2,3,"+", "=", 0,"00", "."]
    const lights = ["+", "second-screen", "-", "*", "/"]
    const [data, setData] = useState({num: "", total: 0, action: ""})

    function checkLength (newTotal){
        if(newTotal.toString().length > 19){
            setData({...data, total: "SYSTEM OVERLOAD"})
        }
    }

    function calculate(el){
        if(typeof el === "number"){
            setData(newNumber => ({...data, num: `${data.num}` + `${el}`}));
        }
        else if(el === "="){
            let newTotal = choise(data.num, data.total, data.action)
            setData(update =>({num:"", total: newTotal, action: ""}));
            checkLength(newTotal)
        }    
        else if(el === "C"){
            setData({num: "", total: 0, action: ""})
        }
        else if (el === "."){
            if(data.num === ""){
                setData(newNumber => ({...data, num: `0.`}));                    
            }
            else if (data.num.includes(".")){
                setData(newNumber => ({...data, total: "ERROR"}));
            }
            else{
                setData(newNumber => ({...data, num: `${data.num}.`}));
            }
        }        
        else if(el === "00"){
            if(data.total === 0){
                setData(addTotal => ({num: "", total: parseFloat(data.num), action: el}))
            }
            else {
                setData(newNumber => ({...data, num: `${data.num}` + `${el}`}));
            }
        }
        else{
            if(data.total === 0){
                setData(addTotal => ({num: "", total: parseFloat(data.num), action: el}))
            }
            else if (data.action === ""){
                setData(newAction => ({...data, action: el}))
            }
            else{
                let newTotal = choise(data.num, data.total, data.action)
                setData(update => ({num:"", total: newTotal, action: el}));
                checkLength(newTotal)
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