import ReactDOM  from 'react-dom/client';        
import Header from './component/header/Header'
import Body from './component/body/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './component/header/About';
import Contact from './component/header/Contact';
import ErrorPage from './component/header/ErrorPage';
import ResMenu from './component/resManu/ResMenu';
import { lazy, Suspense } from 'react';
import Cart from './component/cart/Cart';
import { Provider } from 'react-redux';
import store from './component/store/store'
import Login from './component/login/singup/Login';
import SingUp from './component/login/singup/SingUp';
import { UserProvider } from './component/context/UserContext';
 const App=()=>{
  return(
     <>
     <UserProvider>
        <Provider store={store}>
           <Header/>
           <Outlet/>
        </Provider>
      </UserProvider>
     </>
  )
    
 }
       
  const Grocery=lazy(()=>import("./component/header/Grocery"));

  const Approuter=createBrowserRouter([{
     
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>,
         },
         {
          path:"/contact",
          element:<Contact/>,
         },
         {
         path:"/login",
         element:<Login/>,
        },
        {
         path:"/singup",
         element:<SingUp/>,
        },
         {
            path:"/cart",
            element:<Cart/>,
           },
         {
            path:"/grocery",
            element:(<Suspense fallback={<h1>Loading...</h1>}>
               <Grocery/>
            </Suspense>),
            
           },
         {
          path:"/restaurants/:id",
          element:<ResMenu/>,
         },

      ],
      errorElement:<ErrorPage/>
     }, 
   ])
 const root= ReactDOM.createRoot(document.getElementById("root"))
 root.render(<RouterProvider router={Approuter}/>);