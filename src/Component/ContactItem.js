import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  const twoLetter = props.contact.fullname.split(" ");
  console.log(twoLetter);
  const firstLetter = twoLetter[0].slice(0, 1).toUpperCase();
  console.log(firstLetter);
  let profileWord = firstLetter;
  if (twoLetter.length > 1) {
    const secondLetter = twoLetter[1].slice(0, 1).toUpperCase();
    console.log(secondLetter);
    profileWord = firstLetter.concat(secondLetter);
    console.log(profileWord);
  }
  console.log(profileWord);
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
          <div>{props.contact.fullname}</div>
          <div>{props.contact.email}</div>
        </div>
        <p className={classes.company}>{props.contact.company}</p>
      </div>
    </>
  );
};

export default ContactItem;
