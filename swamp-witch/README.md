# Swamp Witch Tattoo

#### Epicodus Capstone project

#### Chynna Lew

## Technologies Used

* JavaScript
* Node Package Manager
* React
* CSS
* HTML
* email js

## Description
This application was created as a main portfolio/ homepage for a local tattoo artist

Requested Specifications:
Components:
- ABOUT ME (main scroll?)
- Gallery (standalone)
  - Main Gallery (fade in)
  - Flash (fade in)
  - Pet Portraits (fade in)
- FAQ (see good kind site for inspo) (main scroll)
- LOCATION (main scroll)
  -google map, link to anatomy tattoo site
- SHOP (link only)
  - link to big cartel (https://swampwitchtattoos.bigcartel.com/)
- CONTACT (standalone)
  - policies (terms and conditions) 
    -section on contact
    -- must read to continue (accept policies button)
    -- upload vax card to continue?
  - email form
    - their email (with confirm email is accurate)
    - inspo photos
    - placement
    - size
    - color? black and grey?
    - details
    - budget

## Diagrams / Component Layout
<img src='./src/assets/img/victoriaTattoo.png' alt='page plan'/>
<br/>
<img src= './src/assets/img/swampWitchComponents.jpg' alt='component tree'/>


## Setup/Installation Requirements

### This application requires a Formspark account and a google reCaptcha key
* visit [Formspark](https://formspark.io/) to obtain a form id
* visit [Google](https://www.google.com/recaptcha/admin) to set up a v2 account and obtain your keys
    * in your formspark settings, select Google reCaptcha v2 in the spam protection field and enter your Google ReCAPTCHA secret key

* Download or clone [this](https://github.com/chynnalew/capstone) repository to your local machine
* create a .env file in the root project directory (capstone/swamp-witch)
* add the following code to the .env file, replacing YOUR_FORM_ID with your unique id provided by Formspark, and YOUR_SITE_KEY with your site key provided by Google ReCAPTCHA:
```
REACT_APP_FORM_ID = 'YOUR_FORM_ID'
REACT_APP_RECAPTCHA_KEY = 'YOUR_SITE_KEY'
```
* Open the swamp-witch/ project directory in the terminal
* Run the command '$ npm install' to install the needed plugins and packages
* Open the application by running the command '$ npm run start'.

## Known Bugs
* No known bugs

## License

## Contact Information
[Chynna Lew](chynnalew@yahoo.com)
