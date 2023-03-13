import {json,defer,Await} from "react-router-dom";
import {useRouteLoaderData} from "react-router-dom";
import {Suspense} from "react"
import ContactOne from "./ContactOne";
import classes from "./ContactDetail.module.css";
import NewContact from "./NewContact";

const ContactDetail=()=>{
    const data=useRouteLoaderData('individual');
    return (
        <>
            <div className={classes.first}>
                <NewContact/>
                <div className={classes.second}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.contact}>
                            {(contactone)=><ContactOne contact={contactone}/>}
                        </Await>
                    </Suspense>
                </div>
                
            </div>
        </>
    )

}

export default ContactDetail;


async function onecontactloader(params){
    const response=await fetch(`https://contact-react-project-e1c8b-default-rtdb.firebaseio.com/contacts/${params.contactId}.json`);
    if(!response.ok){
        throw json({message:'Could Not Load Data'},{status:500})
    }
    const result=await response.json();
    // const arrone={}
    // for( const key in result){
    //     if(key===params.contactId){
            
    //             arrone.id=key
    //             arrone.fullname=result[key].fullname
    //             arrone.company=result[key].company
    //             arrone.address=result[key].address
    //             arrone.phone=result[key].phone
    //             arrone.email=result[key].email
            
    //     }
        
    // }
    // if(Object.keys(arrone).length===0){
    //     arrone.error="contact not found"
    // }
    return result;
}

// async function contactsloader(){
//     const response=await fetch("https://contact-react-project-e1c8b-default-rtdb.firebaseio.com/contacts.json");
//     if(!response.ok){
//         throw json({message:'Could Not Load Data'},{status:500})
//     }
//     const result=await response.json();
//     const arr=[]
//     for( const key in result){
//         arr.push({
//             id:key,
//             fullname:result[key].fullname,
//             company:result[key].company,
//             address:result[key].address,
//             phone:result[key].phone,
//             email:result[key].email,
//         })
//     }
//     if(Object.keys(arr).length===0){
//         arr.error="contact not found"
//     }
//     return arr;
// }


export async function loader({request,params}){
    return defer({
        contact:await onecontactloader(params),
        // contacts:contactsloader(),
    })
}