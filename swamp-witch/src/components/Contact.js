import React from "react";
import axios from 'axios';

const Contact = () => {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`

  const [formState, useFormState] = React.useState();

  const submitForm = async(event) => {
    event.preventDefault();
    await postSubmission();
  }

  const postSubmission = async () => {
    const payload = {
      message: 'test form'
    }
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="contact">
      <h1 className="sectionHeader">Contact</h1>
      <p>work in progress</p>
      <form id="contact-form" onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required='required'
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required='required'
        />
        <br />
        <textarea
          name="description"
          placeholder="detailed tattoo description"
          required='required'
        />
        <br />
        <input
          name="placement"
          placeholder="placement"
          required='required'
        />
        <br />
        <input
          name="size"
          placeholder="size"
          required='required'
        />
        <br />
        <input
          name="color"
          placeholder="color"
          required='required'
        />
        <br />
        <input
          name="budget"
          placeholder="budget"
          required='required'
        />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
