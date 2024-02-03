import { useDispatch, useSelector } from "react-redux";
import ShowCart from "./ShowCart";
import { clearItem } from "../store/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart=()=>{
  const data=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  //console.log(data[0].data.card.info.name);
   if(data.length===0){
    return <EmptyCart/>
   }
    return(
        <div>
        <div className="flex justify-end mr-40 mt-5">
            <button className="bg-gray-500 px-2 py-1 rounded-lg text-white"
                onClick={()=>dispatch(clearItem())}
            >Clear Cart</button>
        </div>
          
          <div>
          {
            data.map((item, indx)=>
            {
              console.log({item})
             return <ShowCart data={item} indx={indx} /> 
            })
          }
          </div>
          
        </div>
    )
}

export default Cart;