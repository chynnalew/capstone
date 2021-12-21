import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [formState, setFormState] = React.useState();

  const inputFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      name: formState.name,
      email: formState.email,
      description: formState.description,
      placement: formState.placement,
      size: formState.size,
      color: formState.color,
      budget: formState.budget,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="contact">
      <h1 className="sectionHeader">Contact Information</h1>
      <p>To schedule a consultation, please send an email to:
        <br />
        <a className='email' href="mailto: swampwitchtattoos@gmail.com">swampwitchtattoos@gmail.com</a>
        <br />
        or fill out the form below.</p>
      <form id="contactForm" onSubmit={submitForm}>
        <label class='formLabels'>What is your name?</label>
        <br/>
        <input
          onChange={inputFormControl}
          type="text"
          id="name"
          required="required"
        />
        <br />
        <br />
        <label class='formLabels'>Email</label>
        <br/>
        <input
          onChange={inputFormControl}
          type="email"
          id="email"
          required="required"
        />
        <br />
        <br />
        <label class='formLabels'>Describe your tattoo idea:</label>
        <br/>
        <textarea
          onChange={inputFormControl}
          id="description"
          required="required"
        />
        <br />
        <br />
        <label class='formLabels'>Where on your body?</label>
        <br/>
        <input onChange={inputFormControl} id="placement" required="required" />
        <br />
        <br />
        <label class='formLabels'>Approximate tattoo size?</label>
        <br/>
        <input onChange={inputFormControl} id="size" required="required" />
        <br />
        <br />
        <label class='formLabels'>What are your desired colors?</label>
        <br/>
        <input onChange={inputFormControl} id="color" required="required" />
        <br />
        <br />
        <label class='formLabels'>What is your ideal budget?</label>
        <br/>
        <input onChange={inputFormControl} id="budget" required="required" />
        <br />
        <br />
        <div className='agree'>
        <input class='checkBox' type='checkbox' required='required'></input>
        <label class='checkLabel'>I have read and agree to the <NavLink className='email' target='_blank' to='/policies'>shop policies</NavLink></label>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
  // return (
  //   <div id="contact">
  //     <h1 className="sectionHeader">Contact</h1>
  //     <p>work in progress</p>
  //     </div>)
};

export default Contact;
