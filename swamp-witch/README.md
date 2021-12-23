# Swamp Witch Tattoo

#### Epicodus Capstone project

#### Chynna Lew

----------

## Technologies Used

* JavaScript
* Node Package Manager
* React
* CSS
* HTML

## Additional Resources

* [Formspark](https://formspark.io/) 
* [UploadCare](https://uploadcare.com/)
* [Google Recaptcha](https://www.google.com/recaptcha/admin)
* [Responsive Design Testing](http://mattkersley.com/responsive/)
* [css minifier](https://www.toptal.com/developers/cssminifier/)

----------

## Description
This application is as a main portfolio/ homepage for a local tattoo artist that dynamically scales for different media sizes. It contains an email form with a backend provided by Formspark and Upload Care.

Requested Specifications:
Components:
- ABOUT ME 
- Gallery
  - Tattoos
  - Flash 
  - Pet Portraits 
- FAQ 
- LOCATION 
  -google map, link to anatomy tattoo site
- SHOP 
  - link to big cartel (https://swampwitchtattoos.bigcartel.com/)
- CONTACT 
  - policies 
  - email form
    - their email
    - inspo photos
    - placement
    - size
    - color
    - details
    - budget

----------

## Diagrams / Component Layout
<img src='./src/assets/img/victoriaTattoo.png' alt='page plan'/>
<br/>
<img src= './src/assets/img/swampWitchComponents.jpg' alt='component tree'/>

----------


## Setup/Installation Requirements

This application requires a Formspark account, a UploadCare account, and a Google reCaptcha key

* visit [Formspark](https://formspark.io/) to obtain a form id
* visit [Google](https://www.google.com/recaptcha/admin) to set up a v2 account and obtain your keys
    * in your formspark settings, select Google reCaptcha v2 in the spam protection field and enter your Google ReCAPTCHA secret key
* visit [UploadCare](https://uploadcare.com/) to obtain an API key

----------

* Download or clone [this](https://github.com/chynnalew/capstone) repository to your local machine
* create a .env file in the root project directory (capstone/swamp-witch)
* add the following code to the .env file, replacing YOUR_FORM_ID with your unique id provided by Formspark, YOUR_SITE_KEY with your site key provided by Google ReCAPTCHA, and YOUR_UPLOADCARE_KEY with your UploadCare public API key:
```
REACT_APP_FORM_ID = 'YOUR_FORM_ID'
REACT_APP_RECAPTCHA_KEY = 'YOUR_SITE_KEY'
REACT_APP_UPLOADCARE_KEY='YOUR_UPLOADCARE_KEY'
```
* Open the swamp-witch/ project directory in the terminal
* Run the command '$ npm install' to install the needed plugins and packages
* Open the application by running the command '$ npm run start'.

----------

## Known Bugs
* No known bugs

----------

## License
(CC BY-NC-ND 3.0)[https://creativecommons.org/licenses/by-nc-nd/3.0/]

----------

## Contact Information
[Chynna Lew](chynnalew@yahoo.com)
