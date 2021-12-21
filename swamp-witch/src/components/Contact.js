import React from "react";
import axios from "axios";

const Contact = () => {
  // const formId = process.env.REACT_APP_FORM_ID;
  // const formSparkUrl = `https://submit-form.com/${formId}`;

  // const [formState, setFormState] = React.useState();

  // const inputFormControl = (event) => {
  //   const { id, value } = event.target;
  //   const formKey = id;
  //   const updatedFormState = { ...formState };
  //   updatedFormState[formKey] = value;
  //   setFormState(updatedFormState);
  // };

  // const submitForm = async (event) => {
  //   event.preventDefault();
  //   await postSubmission();
  // };

  // const postSubmission = async () => {
  //   const payload = {
  //     name: formState.name,
  //     email: formState.email,
  //     description: formState.description,
  //     placement: formState.placement,
  //     size: formState.size,
  //     color: formState.color,
  //     budget: formState.budget,
  //   };
  //   try {
  //     const result = await axios.post(formSparkUrl, payload);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // return (
  //   <div id="contact">
  //     <h1 className="sectionHeader">Contact</h1>
  //     <p>work in progress</p>
  //     <form id="contact-form" onSubmit={submitForm}>
  //       <input
  //         onChange={inputFormControl}
  //         type="text"
  //         id="name"
  //         placeholder="Your Name"
  //         required="required"
  //       />
  //       <br />
  //       <input
  //         onChange={inputFormControl}
  //         type="email"
  //         id="email"
  //         placeholder="Your Email"
  //         required="required"
  //       />
  //       <br />
  //       <textarea
  //         onChange={inputFormControl}
  //         id="description"
  //         placeholder="detailed tattoo description"
  //         required="required"
  //       />
  //       <br />

  //       <input onChange={inputFormControl} id="placement" placeholder="placement" required="required" />
  //       <br />
  //       <input onChange={inputFormControl} id="size" placeholder="size" required="required" />
  //       <br />
  //       <input onChange={inputFormControl} id="color" placeholder="color" required="required" />
  //       <br />
  //       <input onChange={inputFormControl} id="budget" placeholder="budget" required="required" />
  //       <br />
  //       <input type="submit" value="Send" />
  //     </form>
  //   </div>
  // );
  return (
    <div id="contact">
      <h1 className="sectionHeader">Contact</h1>
      <p>work in progress</p>
      </div>)
};

export default Contact;
