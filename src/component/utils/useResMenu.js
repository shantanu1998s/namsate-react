import { useEffect, useState } from "react";
import { ApiLink, menuApi } from "./constant";

const useResMenu=(id)=>{
    const [resinfo, setResInfo]=useState(null);
    const [items,setItems]=useState(null);
    console.log(id);
    useEffect(()=>{
       fetchData();
    },[])

    async function fetchData(){
        const data= await fetch(menuApi+id);
        const jsonData= await data.json();
        console.log(jsonData);
        setResInfo(jsonData);
        //setItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    }
    return resinfo;
}

export default useResMenu;