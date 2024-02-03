import { useDispatch } from "react-redux"
import { imgID } from "../utils/constant"
import { addItem } from "../store/cartSlice";

 const Category=(item)=>{
    const dispatch=useDispatch();
    console.log(item)

    const{
        name,
        price,
        description,
        imageId,
        isVeg,
    }=item?.data?.card?.info
    const imgId=imgID+imageId;
    return(<>
        <div className="flex justify-between w-[100%] my-6 px-2">
         <div className="text-start w-[85%]">
           <div>{isVeg?'🟢':"🔴"}</div>
           <div>{name}</div>
           <div>₹{price/100}</div>
           <div>{description}</div>
         </div>

        <div className="relative w-[15%]">
         <img src={imgId} className="rounded-lg" />
         <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white rounded-lg py-1 px-3"
            onClick={()=>dispatch(addItem(item))}
         >Add</button>
        </div>

        </div>
        <div className="border-t border-dotted border-gray-500 h-0 w-full border-1"></div>
        </>
    )
 }

 export default Category;