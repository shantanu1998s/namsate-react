
const EmptyCart=()=>{
    return(
        <div className="">
           <div className="flex justify-center items-center font-bold my-10 text">
             <h1>There is no item in your cart</h1>
           </div>
         <div className="flex justify-center text-blue-600"><a href="/"> Click here to Add items</a></div>
        </div>

    )
}

export default EmptyCart;