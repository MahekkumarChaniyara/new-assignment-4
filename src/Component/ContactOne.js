import classes from "./ContactOne.module.css";
import { Link } from "react-router-dom";

const ContactOne = (props) => {
  const twoLetter=props.contact.fullname.split(" ")
  const firstLetter=twoLetter[0].slice(0,1).toUpperCase();
  let profileWord=firstLetter
  if(twoLetter.length>1){
    const secondLetter=twoLetter[1].slice(0,1).toUpperCase();
    profileWord=firstLetter.concat(secondLetter)
  }

 
  return (
    <>
      <div className={classes.showDetails}>
        <div className={classes.circleDiv}>
          <p><span className={classes.circle}><span>{profileWord}</span></span></p>
          {props.contact.position && props.contact.company && <p className={classes.showPosition}>{props.contact.position} at {props.contact.company}</p>}
        </div>
        <div className={classes.name}>
          <div className={classes.col1}>FullName:</div>
          <div className={classes.col}>{props.contact.fullname}</div>
        </div>
        <div className={classes.email}>
          <div className={classes.col1}>Email:</div>
          <div className={classes.col}>{props.contact.email}</div>
        </div>
        <div className={classes.phone}>
          <div className={classes.col1}>Phone:</div>
          <div className={classes.col}>{props.contact.phone}</div>
        </div>
        <div className={classes.company}>
          <div className={classes.col1}>Company:</div>
          <div className={classes.col}>{props.contact.company}</div>
        </div>
        <div className={classes.address}>
          <div className={classes.col1}>Address:</div>
          <div className={classes.col}>{props.contact.address}</div>
        </div>
        <div className={classes.col}>
        <Link to={`edit`}><div className={classes.coledit}>Edit Contact</div></Link>
          
        </div>
      </div>
    </>
  );
};

export default ContactOne;
