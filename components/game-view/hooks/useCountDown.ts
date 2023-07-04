import { useState,useEffect } from "react"



export const useCountDown = (initialTime:number,callback:()=>void,interval=1000)=>{
const [time, setTime] = useState(initialTime);

useEffect(()=>{
    const customInterval=setInterval(()=>{
        if(time>0) setTime((prev)=>prev - interval)
    },interval)

    if(time==0){callback(),setTime(initialTime)};

    return ()=>clearInterval(customInterval);
},[time,callback,interval,initialTime])

return time
}