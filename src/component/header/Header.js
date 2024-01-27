import { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{

   const [btnName, setBtnName]=useState("Login");
       const OnlineStatu=useOnlineStatus();
    return(
     <div className="header">
       <div className='logo-img'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4FZrNQTIQ_TWF1N5mM3Px6jOgGo3EztErBQTIGdYo2uusBJXt6Aku-6EJd-dlZ9Unm0&usqp=CAU"></img>
       </div>
         <ul className='nav-item'>
           <li>OnlineStatus{OnlineStatu? ' 🟢':' 🔴'}</li>
           <li>
              <NavLink to={"/"} >Home</NavLink> 
           </li>
           <li>
              <NavLink to={"/about"} >About</NavLink> 
           </li>
           <li>
              <NavLink to={"/contact"} >Contact Us</NavLink> 
           </li>
           <li>
              <NavLink to={"/grocery"} >Grocery</NavLink> 
           </li>
           <button onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
         </ul>
     
     </div>
    );
 }

 export default Header;