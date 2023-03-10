import ContactItem from "./ContactItem";
import classes from "./ContactsList.module.css";
import {Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ContactsList=(props)=>{
    
    

    return (
        <>
            <div className={classes.main}>
            <TransitionGroup component="ul">
                {props.contact.map(contact=><CSSTransition key={contact.id} classNames="fade" timeout={500}><li><Link to={`/contact/${contact.id}`}><ContactItem  contact={contact}/></Link></li></CSSTransition>)}
            </TransitionGroup>
            </div>
        </>
    )
}

export default ContactsList;