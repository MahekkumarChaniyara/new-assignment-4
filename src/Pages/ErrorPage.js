import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error=useRouteError();
    let title="An Error Occured!";
    let message="Something went Wrong!";

    if(error.status===500){
        message=error.data.message;
    }
    if(error.status===300){
        message=error.data.message;
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>{message}</h2>
        </>
    )
}

export default ErrorPage;