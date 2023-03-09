import {Outlet} from "react-router-dom"
import classes from "./AddContactPage.module.css";

const EditContactPage=()=>{
    return (
        <>
        <div className={classes.divmid}>
            <h3>EditContact Details</h3>
            <Outlet/>
        </div>
            
        </>
    )
}

export default EditContactPage;