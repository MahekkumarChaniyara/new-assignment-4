import ContactItem from "./ContactItem";
import classes from "./ContactsList.module.css";
import {Link} from "react-router-dom";

const ContactsList=(props)=>{
    
    

    return (
        <>
            <div className={classes.main}>
                <ul>{props.contact.map(contact=><li key={contact.id}><Link to={`/contact/${contact.id}`}><ContactItem  contact={contact}/></Link></li>)}</ul>
            </div>
        </>
    )
}

export default ContactsList;