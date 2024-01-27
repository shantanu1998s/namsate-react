import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{

   const [btnName, setBtnName]=useState("Login");
       const OnlineStatu=useOnlineStatus();
    return(
     <div className="flex justify-between bg-gray-50">
       <div className='w-[100px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4FZrNQTIQ_TWF1N5mM3Px6jOgGo3EztErBQTIGdYo2uusBJXt6Aku-6EJd-dlZ9Unm0&usqp=CAU"></img>
       </div>
         <ul className='flex items-center'>
           <li className='m-4'>OnlineStatus{OnlineStatu? ' 🟢':' 🔴'}</li>
           <li className='m-4'>
              <NavLink to={"/"} >Home</NavLink> 
           </li>
           <li className='m-4'>
              <NavLink to={"/about"} >About</NavLink> 
           </li>
           <li className='m-4'>
              <NavLink to={"/contact"} >Contact Us</NavLink> 
           </li>
           <li className='m-4'>
              <NavLink to={"/grocery"} >Grocery</NavLink> 
           </li>
           <button className='mr-4' onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
         </ul>
     
     </div>
    );
 }

 export default Header;