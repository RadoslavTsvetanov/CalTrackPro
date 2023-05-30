import React from "react";

interface BarProps{
    value:number;
    color:string;
    text:string;
}
export default function FillBar(props:BarProps){
    //TO FIX WIDTH
    return (
        <>
        <p>{props.text}</p>
        <div className='w-[20rem] h-[5vh] bg-[#3c4345f9] rounded-3xl'><div className={`w-[calc(${(props.value / 200) * 20}rem)] h-[5vh] bg-[rgb(240,206,72)] rounded-3xl`}>{props.value}</div></div>
    </>
    )
}