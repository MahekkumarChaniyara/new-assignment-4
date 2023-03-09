import { Outlet } from "react-router-dom"
import PageLayout from "../Pages/PageLayout"
import classes from "./header.module.css"


const Header=()=>{
    return (
        <>
            <div className={classes.headerdiv}>
                <PageLayout/>
                <Outlet/>
            </div>    
        </>
    )
}

export default Header;