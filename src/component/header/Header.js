import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../context/UserContext";

const Header = () => {
  const { obj, setObj } = useContext(UserContext);
  const item = useSelector((store) => store.cart.items);
  console.log(item);
  const [btnName, setBtnName] = useState("Login");
  const OnlineStatu = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-50">
      <div className=" flex justify-between items-center">
        <img 
          className="w-[100px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4FZrNQTIQ_TWF1N5mM3Px6jOgGo3EztErBQTIGdYo2uusBJXt6Aku-6EJd-dlZ9Unm0&usqp=CAU"/>
        
        <h1 className="text-black font-bold mt-2 text-3xl mb-4">🕉Radhe Radhe🙏</h1>
      </div>
      <ul className="flex items-center">
        <li className="m-4">OnlineStatus{OnlineStatu ? " 🟢" : " 🔴"}</li>
        <li className="m-4">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="m-4">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="m-4">
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
        <li className="m-4">
          <NavLink to={"/grocery"}>Grocery</NavLink>
        </li>
        <li className="m-4">
          <NavLink to={"/cart"}>🚮 Cart({item.length})</NavLink>
        </li>

        <NavLink
          className={"mr-5"}
          to={"/login"}
          onClick={() => setObj((prev) => ({ ...prev, isLogin: false }))}
        >
          {obj.isLogin ? obj.name : "Sign In"}
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
