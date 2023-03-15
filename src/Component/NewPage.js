import { useNavigation } from "react-router-dom";
import classes from "./NewPage.module.css"
import {IoMdContact} from "react-icons/io"

const NewPage=()=>{
    const nav=useNavigation();
    return (<>
        <h1 >
           Hello, This is Home Page please go to Contact Page on click <IoMdContact style={{textAlign:'center'}}/>
        </h1>
        {nav.state==="loading" && <div className={classes.loading}>Loading...</div>}
    </>)
}

export default NewPage;