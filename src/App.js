import ReactDOM  from 'react-dom/client';        
import Header from './component/header/Header'
import Body from './component/body/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './component/header/About';
import Contact from './component/header/Contact';
import ErrorPage from './component/header/ErrorPage';
import ResMenu from './component/resManu/ResMenu';
import { lazy, Suspense } from 'react';
  

 const App=()=>{
  return(
     <>
        <Header/>
        <Outlet/>
     </>
  )
    
 }
       
  const Grocery=lazy(()=>import("./component/header/Grocery"));

 const Approuter=createBrowserRouter([
     {
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