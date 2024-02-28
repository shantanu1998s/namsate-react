import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../header/Header"
import { Provider } from "react-redux"
import store from "../store/store"
import { BrowserRouter} from "react-router-dom"
import '@testing-library/jest-dom';

 it("should component load correctly", ()=>{ 
    render(
         <Provider store={store}>
           <BrowserRouter>
               <Header/>
           </BrowserRouter>
         </Provider>
        )

        const loginButton=screen.getByRole("button",{name:"Login"});

        expect(loginButton).toBeInTheDocument()

 })

 it("should render login and logOut correctly", ()=>{ 
    render(
         <Provider store={store}>
           <BrowserRouter>
               <Header/>
           </BrowserRouter>
         </Provider>
        )

        const loginButton=screen.getByRole("button",{name:"Login"});

           fireEvent.click(loginButton)

        const logoutButton=screen.getByRole("button",{name:"Logout"});

        expect(logoutButton).toBeInTheDocument()

 })