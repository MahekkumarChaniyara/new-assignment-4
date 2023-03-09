import { json, useRouteLoaderData,Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import classes from "./NewContact.module.css";
import {useState} from "react";
import {RiContactsBook2Fill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"

const NewContact=()=>{
    const contactDetails=useRouteLoaderData('loadcontact');
    const[search,setSearch]=useState('');
    function seachingContact(e){
        setSearch(e.target.value);
    }
    const filterContactDetails=contactDetails.filter(oneContact=>oneContact.fullname.includes(search.trim()))
    console.log(filterContactDetails)
    const renderList=search===null?contactDetails:filterContactDetails
    return (
        <>
            <div className={classes.main}>
                <div className={classes.contactIcon}><div><RiContactsBook2Fill className={classes.icons}/></div><div className={classes.spancontact}><span className={classes.span1}>Contact</span><span>Welcome to firstCRM contact page</span></div></div>
                <div className={classes.inputdiv}> <input type="text" placeholder="search contact" onChange={seachingContact}></input><div className={classes.button}><Link className={classes.a} to="/contact/addcontact"><AiOutlinePlus/>Add Contact</Link></div></div>
                <div className={classes.labels}>
                    <p className={classes.p1}>Basic Info</p>
                    <p className={classes.p2}>Company Name</p>
                </div>
                <div className={classes.scrollmany}>{renderList.length>0?<ContactsList contact={renderList}/>:<p>No one contact is save</p>}</div>
            </div>
        </>
    )
}
export default NewContact;


export async function loader(){
    const response=await fetch("https://contact-react-project-e1c8b-default-rtdb.firebaseio.com/contacts.json");
    if(!response.ok){
        throw json({message:'Could Not Load Data'},{status:500})
    }
    const result=await response.json();
    const arr=[]
    for( const key in result){
        arr.push({
            id:key,
            fullname:result[key].fullname,
            company:result[key].company,
            address:result[key].address,
            phone:result[key].phone,
            email:result[key].email,
        })
    }
    return arr;
}