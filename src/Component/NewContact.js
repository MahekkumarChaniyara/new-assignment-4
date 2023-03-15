import { json, useRouteLoaderData,Link, Outlet } from "react-router-dom";
import ContactsList from "./ContactsList";
import classes from "./NewContact.module.css";
import {useState} from "react";
import {RiContactsBook2Fill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"

const NewContact=()=>{
    const contactDetails=useRouteLoaderData('loadcontact');
    const[search,setSearch]=useState('');
    function seachingContact(e){
        setSearch(e.target.value);
    }
    const filterContactDetails=contactDetails.filter(oneContact=>oneContact.fullname.toLowerCase().includes(search.trim()))
    const renderList=search===null?contactDetails:filterContactDetails
    return (
        <>
            <div className={classes.main}>
                <div className={classes.contactIcon}><div><RiContactsBook2Fill className={classes.icons}/></div><div className={classes.spancontact}><span className={classes.span1}>Contact</span><span>Welcome to firstCRM contact page</span></div></div>
                <div className={classes.inputdiv} title="This is Search bar to serach contact using person name"> <div className={classes.serachDiv}><BiSearch className={classes.iconsearch}/><input type="text" placeholder="search contact" onChange={seachingContact}></input></div><Link className={classes.a} to="/contact/addcontact"><div className={classes.button} title="This is ADD Contact button"><AiOutlinePlus/>Add Contact</div></Link></div>
                <div className={classes.labels}>
                    <p className={classes.p1}>Basic Info</p>
                    <p className={classes.p2}>Company Name</p>
                </div>
                <div className={classes.scrollmany}>{renderList.length>0?<ContactsList contact={renderList}/>:<p>No one contact is save</p>}</div>
            </div>
            <Outlet/>
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
            position:result[key].position,
        })
    }
    return arr;
}