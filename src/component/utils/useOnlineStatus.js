import { useEffect, useState } from "react"
   
const useOnlineStatus=()=>{
     
    const [status,setStatus]=useState(true)
    console.log("we are in online status");
    useEffect(()=>{
        window.addEventListener('offline',()=>{
                setStatus(false);
        })
        window.addEventListener('online',()=>{
            setStatus(true);
    },[])
  
})
     return status;
}

export default useOnlineStatus;