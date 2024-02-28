import {  useState ,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import SingUp from "./SingUp";
import UserContext from "../../context/UserContext";

const Login=()=>{
    const {obj,setObj}=useContext(UserContext);
    const navigate = useNavigate();
    //console.log(navigate)
    const  [number, setNumber] = useState();
    const [password, setPassword]=useState()
    const [state,setstate]=useState(false);
    
    function handleClick(){
        if(number===obj.number && password===obj.password){
            setObj(prev=>({...prev,isLogin:true}))
            navigate('/');
        }
    }

    console.log(number);
    if(state)return <SingUp/>
    else
    return(
        <div className="flex justify-end h-auto  mr-2 mt-1">
       
         <div className=" w-[30%] border border-black bg-gray-100 rounded-md text-center pb-16">

         <div className="flex mt-10 justify-between ml-20">
           <h1 className="font-bold border-b border-black text-xl">Login</h1>
           <button className="  text-blue-600 text-lg"
             onClick={()=>{ 
              setstate(!state)
                navigate('/singup')
            }}>
             SingUp
           </button><br/>
          </div>
            <div className="mt-10">
                 <input className=" border rounded-lg p-3 px-10" type="number" placeholder="Phone Number"
                  onChange={(e)=>setNumber(e.target.value)}
                 /><br/>
                 <input className=" border rounded-lg p-3 px-10 mt-2" type="password" placeholder="password"
                   onChange={(e)=>setPassword(e.target.value)}
                /><br/>
                  <button  className="mt-3 border p-2 bg-blue-600 text-white rounded-md px-28"
                   onClick={handleClick}
                      >Login
                  </button><br/>
                   <p>By clicking on Login , you accept our Term & Condition & policy</p>
           </div>
         </div>
        </div>
    )
    }

export default Login;