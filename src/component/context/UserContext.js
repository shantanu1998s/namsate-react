import { createContext, useState } from "react";

 const UserContext=createContext()

  export const UserProvider=({children})=>{
    const [obj, setObj]=useState({
        number:'',
        email:'',
        name:'',
        password:'',
        cpassword:'',
        isLogin:false
    })
   console.log(obj);
    return (<UserContext.Provider value={{setObj,obj}}>{children}</UserContext.Provider>)
  } 
 export default UserContext;