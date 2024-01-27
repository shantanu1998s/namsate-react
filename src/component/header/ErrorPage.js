import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <>
           <h1>Oops</h1>
           <p>Something wrong!!</p>
           <h3>{err.status} {err.statusText}</h3>
        </>
    )
}

export default ErrorPage;