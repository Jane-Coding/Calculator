import "./Calculator.css"
import TopPlate from "./TopPlate"
import {choise} from "./utility"
import { useState } from "react"

export default function Calculator (){
    const buttons = [7,8,9,"/","C",4,5,6,"-","*", 1,2,3,"+", "=", 0,"00", "."]
    const lights = ["+", "top-screen", "-", "*", "/"]
    const [data, setData] = useState({num: "", total: "0", action: ""})

    function checkLength (newTotal){
        newTotal.toString().length > 17 && setData({...data, total: "SYSTEM OVERLOAD"})        
    }

    function calculate(el){
        if(typeof el === "number"){
            setData(newNumber => ({...data, num: `${data.num}` + `${el}`}));
            if(data.num.length > 14){
                setData({...data, total: "SYSTEM OVERLOAD"})
            } 
        }
        else {
            if(el === "="){
                if(data.total === "0" && data.num !== ""){
                    setData(() =>({total: parseFloat(data.num), num:""}));
                }
                else{
                    let newTotal = choise(data.num, data.total, data.action)
                    setData(() =>({num:"", total: newTotal, action: ""}));
                    checkLength(newTotal);
                }
            }    
            else if(el === "C"){
                setData({num: "", total: "0", action: ""})
            }
            else if(el === "00"){
                if(data.num !== ""){
                    setData(() => ({...data, num: `${data.num}` + `${el}`}));                
                }
                if(data.num.length > 13){
                    setData({...data, total: "SYSTEM OVERLOAD"})
                } 
            }
            else if (el === "."){
                if(data.num === ""){
                    setData(() => ({...data, num: `0.`}));                    
                }
                else if (data.num.includes(".")){
                    setData(() => ({...data, total: "ERROR"}));
                }
                else{
                    setData(() => ({...data, num: `${data.num}.`}));
                }
            }        
            else{
                if(data.num === "" && data.total === "0"){
                    setData(() => ({...data, total: "ERROR"}));
                    setTimeout(() => setData({num: "", total: "0", action: ""}), 1000)
                }
                else if(data.total === "0" && data.num !== ""){
                    setData(() => ({num: "", total: parseFloat(data.num), action: el}))
                }
                else if (data.action === ""){
                    setData(() => ({...data, action: el}))                    
                }
                else{
                    let newTotal = choise(data.num, data.total, data.action)
                    setData(() => ({num:"", total: newTotal, action: el}));
                    checkLength(newTotal)
                }
            }
        }
    }

    return (
        <div className="frame">
            <div className="screen-frame">
                <TopPlate lights={lights} currentTotal={data.total} lightOn={data.action}/>
                <span className="screen">{data.num}</span>
            </div>            
            <div className="buttons-layout">
                {buttons.map((el) => <button key={el} onClick={() => calculate(el)}>{el}</button>)}
            </div>
        </div>
    )
}