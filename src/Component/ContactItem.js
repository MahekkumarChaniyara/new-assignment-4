import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  const twoLetter = props.contact.fullname.split(" ");
  const firstLetter = twoLetter[0].slice(0, 1).toUpperCase();
  let profileWord = firstLetter;
  if (twoLetter.length > 1) {
    const secondLetter = twoLetter[1].slice(0, 1).toUpperCase();
    profileWord = firstLetter.concat(secondLetter);
  }
  return (
    <>
      
      <div className={classes.main}>
        <div className={classes.circleDiv}>
            <p>
            <span className={classes.circle}>
                <span>{profileWord}</span>
            </span>
            </p>
        </div>
        <div className={classes.name}>
          <div className={classes.fullname}>{props.contact.fullname}</div>
          <div className={classes.email}>{props.contact.email}</div>
        </div>
        <div className={classes.company}>{props.contact.company}</div>
      </div>
    </>
  );
};

export default ContactItem;
