import classes from "./AddContact.module.css";
import {
  Form,
  json,
  redirect,
  useNavigate,
  useRouteLoaderData,
  useNavigation,
  useActionData,
} from "react-router-dom";

const AddContact = (props) => {
  const errorData = useActionData();
  const navigate = useNavigate();
  function clickHandler() {
    navigate("..");
  }
  const submitnavigate = useNavigation();
  const dataContact = useRouteLoaderData("individual");

  return (
    <>
      <Form method={props.method}>
        <div className={classes.mainform}>
          <h4><span className={classes.span}>*</span> field is mendetory.</h4>
          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label
                htmlFor="name"
                className={
                  errorData && errorData.fullnameerror && classes.labelError
                }
              >
                Enter Full Name<span className={classes.span}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Person Full Name"
                defaultValue={dataContact && dataContact.contact.fullname}
                className={
                  errorData && errorData.fullnameerror && classes.inputError
                }
              ></input>
            </div>
            {errorData && (
              <>
                <p>{errorData.fullnameerror}</p>
              </>
            )}
          </div>

          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label
                htmlFor="email"
                className={
                  errorData && errorData.emailerror && classes.labelError
                }
              >
                Email Id<span className={classes.span}>*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="test@test.com"
                defaultValue={dataContact && dataContact.contact.email}
                className={
                  errorData && errorData.emailerror && classes.inputError
                }
              ></input>
            </div>
            {errorData && (
                <>
                  <p>{errorData.emailerror}</p>
                </>
              )}
          </div>

          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={dataContact && dataContact.contact.address}
              ></input>
            </div>
          </div>

          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                defaultValue={dataContact && dataContact.contact.company}
              ></input>
            </div>
          </div>

          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                defaultValue={dataContact && dataContact.contact.position}
              ></input>
            </div>
          </div>

          <div className={classes.smallparent}>
            <div className={classes.small}>
              <label
                htmlFor="number"
                className={
                  errorData && errorData.phoneerror && classes.labelError
                }
              >
                Phone Number<span className={classes.span}>*</span>
              </label>
              <input
                type="text"
                id="number"
                name="number"
                defaultValue={dataContact && dataContact.contact.phone}
                className={
                  errorData && errorData.phoneerror && classes.inputError
                }
              ></input>
            </div>
            {errorData && (
              <>
                <p>{errorData.phoneerror}</p>
              </>
            )}
          </div>

          <div className={classes.buttons}>
            <button type="button" onClick={clickHandler} title="Using this button you can move to previous page">
              Cancel
            </button>
            <button className={classes.submit} title="Using that you can you can save your person contact details">
              {submitnavigate.state === "submitting"
                ? "Submitting..."
                : "Submit"}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddContact;

export async function action({ request, params }) {
  console.log(request.method);
  const formdata = await request.formData();
  const bodyData = {
    fullname: formdata.get("name").trim(),
    company: formdata.get("company").trim(),
    address: formdata.get("address").trim(),
    email: formdata.get("email").trim(),
    phone: formdata.get("number").trim(),
    position:formdata.get("position").trim(),
  };
  const error = {};
  if (bodyData.fullname === "") {
    error.fullnameerror = "Please Enter Person Name";
  }
  if (
    bodyData.email === "" ||
    !bodyData.email.includes("@") ||
    !bodyData.email.includes(".")
  ) {
    error.emailerror = "Please Enter Valid Emial Address";
  }
  if (
    bodyData.phone === "" ||
    bodyData.phone.length > 11 ||
    bodyData.phone.length < 10 || isNaN(bodyData.phone)
  ) {
    error.phoneerror = "Please Enter 10 Digit Number";
  }
  if (bodyData.address === "") {
    bodyData.address = "Information is Not Provided";
  }
  if (bodyData.company === "") {
    bodyData.company = "Information is Not Provided";
  }
  if (Object.keys(error).length > 0) {
    return error;
  }
  if (request.method === "POST") {
    const response = await fetch(
      "https://contact-react-project-e1c8b-default-rtdb.firebaseio.com/contacts.json",
      {
        method: request.method,
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw json({ message: "Could Not Save Data" }, { status: 300 });
    }

    return redirect("/contact");
  }
  console.log("hello");
  if (request.method === "PATCH") {
    console.log("hello");
    const response = await fetch(
      `https://contact-react-project-e1c8b-default-rtdb.firebaseio.com/contacts/${params.contactId}.json`,
      {
        method: request.method,
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      throw json({ message: "Could Not Load Data" }, { status: 500 });
    }
    const result = await response.json();
    console.log(result);
    // const arrObj={}
    // for( const key in result){
    //     if(params.contactId===key){
    //         arrObj.id=key;
    //         arrObj.fullname=result[key].fullname;
    //         arrObj.company=result[key].company;
    //         arrObj.address=result[key].address;
    //         arrObj.phone=result[key].phone;
    //         arrObj.email=result[key].email;
    //     }
    // }
    return redirect("/contact");
  }
}
