import { Outlet } from "react-router-dom"
import NewContact from "../Component/NewContact"

const ContactDetailPage=()=>{
    return (
        <>
            <NewContact/>
            <Outlet/>
        </>
    )
}

export default ContactDetailPage;