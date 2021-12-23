import React from "react";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// eslint-disable-next-line
import uploadcare from "uploadcare-widget/uploadcare.lang.en.min.js";

const Contact = () => {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;
  const recaptchaRef = React.useRef();

  return (
    <div id="contact">
      <h1 className="sectionHeader">Contact Information</h1>
      <h1 style={{ color: "red" }}>
        THIS SITE IS UNDER DEVELOPMENT
        <br /> the contact form is not currently active
      </h1>
      <p>
        To schedule a consultation, please send an email to:
        <br />
        <a className="email" href="mailto: swampwitchtattoos@gmail.com">
          swampwitchtattoos@gmail.com
        </a>
        <br />
        or fill out the form below.
      </p>
      <form id="contactForm" action={formSparkUrl}>
        <label class="formLabels">What is your name?</label>
        <br />
        <input type="text" id="name" name="name" required="required" />
        <br />
        <br />
        <label class="formLabels">Email</label>
        <br />
        <input type="email" id="email" name="email" required="required" />
        <br />
        <br />
        <label class="formLabels">Describe your tattoo idea:</label>
        <br />
        <textarea id="description" name="description" required="required" />
        <br />
        <br />
        <label class="formLabels">Where on your body?</label>
        <br />
        <input id="placement" name="placement" required="required" />
        <br />
        <br />
        <label class="formLabels">Approximate tattoo size?</label>
        <br />
        <input id="size" name="size" required="required" />
        <br />
        <br />
        <label class="formLabels">What are your desired colors?</label>
        <br />
        <input id="color" name="color" required="required" />
        <br />
        <br />
        <label class="formLabels">What is your ideal budget?</label>
        <br />
        <input id="budget" name="budget" required="required" />
        <br />
        <br />
        <label for="photo">Reference photos</label>
        <br />
        <input
          type="hidden"
          id="photos"
          name="photos"
          // eslint-disable-next-line
          role="uploadcare-uploader"
          data-multiple="true"
          data-public-key={process.env.REACT_APP_UPLOADCARE_KEY}
        />

        <br />
        <br />
        <div className="agree">
          <input class="checkBox" type="checkbox" required="required"></input>
          <label class="checkLabel">
            I have read and agree to the{" "}
            <NavLink className="email" target="_blank" to="/policies">
              shop policies
            </NavLink>
          </label>
        </div>

        <ReCAPTCHA
          className="reCaptcha"
          ref={recaptchaRef}
          sitekey={recaptchaKey}
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
