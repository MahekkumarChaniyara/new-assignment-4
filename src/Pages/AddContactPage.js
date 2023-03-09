import {Outlet} from "react-router-dom"
import classes from "./AddContactPage.module.css";

const AddContactPage=()=>{
    return (
        <>
        <div className={classes.divmid}>
            <h3>Add New Contact Details</h3>
            <Outlet/>
        </div>
            
        </>
    )
}

export default AddContactPage;