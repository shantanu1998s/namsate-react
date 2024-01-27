import { useState, useEffect } from "react";
import { ApiLink } from "./constant";

const useBody=()=>{

    const [info, setInfo]=useState(null);

    useEffect(()=>{
        fetchApi();
       },[])
    
        async function fetchApi(){
             const data= await fetch(ApiLink)
             const json= await data.json();
             console.log(json);
             setInfo(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
    return info;
}

export default useBody;