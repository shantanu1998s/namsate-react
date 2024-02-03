import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import Offer from "./Offer";
import ListOfItems from "./ListOfItems";
import { useState } from "react";

const ResMenu=()=>{
   const {id}= useParams();
   const [showIndex,setShowIndex]=useState(null);

  const menuData=useResMenu(id);
  //console.log(menuData);
  const items = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item =>
     item?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const offerItems=menuData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers

 //console.log(items);
  if(menuData===null) return <Shimmer/>
  
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla

  }=menuData.data.cards[0].card.card.info
  return(
    <div className="text-center  w-9/12 m-auto  bg-gray-100 mt-3 ">
    <div className="flex justify-between">
      <div className="m-4">
        <h1 className="font-bold" >{name}</h1>
        <p className="m-2">{cuisines}</p>
        <p className="m-2"> 🚴‍♀️1.1 kms | ₹35 Delivery fee will apply</p>
      </div>

      <div className="m-4 border px-1 border-black ">
         <div className="m-2 ">💥{avgRating}</div>
         <div className="font-bold text-gray-400">{totalRatingsString}</div>
      </div>
    </div>

    <div class="border-t border-dotted border-gray-500 h-0 w-full border-2"></div>
    
    <div className="flex justify-start ml-5">
     <span className="font-bold mr-3">🕑{sla.minDeliveryTime} 
      {sla.maxDeliveryTime}MINS</span>
     <span className="font-bold">  {costForTwoMessage}</span>
    </div>

    <div className="flex justify-between flex-wrap m-6">
    {
      offerItems.map((item, indx)=>(<div 
        key={indx} 
        className="border border-gray-800 p-1 rounded-lg cursor-pointer" >
      {<Offer data={item}/>}
      </div>))
    }
    </div>

    <div className="border-t border-dotted border-gray-500 h-0 w-full border-2"></div>

    <div className="mt-6">
      {
        items.map((data,indx)=>(<div key={indx}>
          <ListOfItems
           data={data} 
           showItems={indx===showIndex?true:false} 
           setShowIndex={()=>setShowIndex(indx)}/>
           </div>))
      }
    </div>
   
  </div>
  )
}

export default ResMenu;