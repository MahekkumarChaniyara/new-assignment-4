import { useNavigation } from "react-router-dom";
import classes from "./NewPage.module.css"

const NewPage=()=>{
    const nav=useNavigation();
    return (<>
        <h1>
           New Page Hello
        </h1>
        {nav.state==="loading" && <div className={classes.loading}>Loading...</div>}
    </>)
}

export default NewPage;