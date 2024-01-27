import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
const ResMenu=()=>{
   const {id}= useParams();
  
  const menuData=useResMenu(id);
  const items=menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  console.log("hello i m outside fetch");
  if(menuData===null) return <Shimmer/>
  
  console.log(items)
  console.log(menuData)
  const {
    name,
    cuisines
  }=menuData.data.cards[0].card.card.info
   
  return(
    <>
    <h1>{name}</h1>
      <p>{cuisines}</p>
      <h1>Menu</h1>
      <ul>
      {
        items.itemCards.map((item)=>
        <li key={item.card.info.id}>
        {item.card.info.name} - {item.card.info.price/100}
        
        </li>)
      }
      </ul>
    </>
  )
}

export default ResMenu;