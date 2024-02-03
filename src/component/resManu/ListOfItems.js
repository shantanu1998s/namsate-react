import { useState } from "react";
import Category from "./Category";

 const ListOfItems=({data,showItems,setShowIndex})=>{
    //console.log(data);
    
    function handleClick(){
        setShowIndex(); 
    }

    const{
        itemCards,
        title,
    }=data.card.card;
    //console.log(itemCards);
    return(
        <div className="bg-white ">
          <div className="bg-white my-3 p-4 rounded-lg flex justify-between cursor-pointer shadow-lg "
             onClick={handleClick}>
             <h1 className="font-bold text-gray-700">{title } 
             ({itemCards.length})</h1>
             <span>{showItems?'🔼':'🔽'}</span>
          </div>
          <div>
          {
            data.card.card.itemCards.map((item, indx)=><div 
             key={indx}>
             {showItems?<Category data={item}/>:""}
             </div>)
          }
            
  
        </div>
        </div>
    )
 }

 export default ListOfItems;