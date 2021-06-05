# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Solution on Github](https://github.com/puzzledpromise/intro-component-with-signup-form)
- Live Site URL: [Live on VERCEL](https://intro-component-with-signup-form-eight-bay.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS & SCSS
- Flexbox
- A little bit of JavaScript to verify input




### Notes

Used a separate file `_variables.scss` - maybe a little overkill in this case. 




### Accessibility Issues and HTML Issues

I got accessibility issues for the input fields: 

*This textinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.*

Fixed it the following way: 

```html
<input type="text" id="firstname" name="firstname" aria-label="Input for first name" placeholder="First Name">
```

Then there was an HTML issue:

**Consider avoiding viewport values that prevent users from resizing documents.**

This one was easy to fix in the meta. 


### Useful resources

- [Box Shadow Generator](https://css-box-shadow.tinytools.online/presets/material) - for form and button shadows 
- [Brad Traversy JS Projects Course](https://subscription.packtpub.com/video/web_development/9781800563049) - Form validation 

### Interesting Solutions

- Interesting solution for the label: [Boedegoat](https://github.com/boedegoat/front-end-signup-form-master) - [Live](https://boedegoat-sign-up-form.netlify.app/) 
- Overall well done: [Palgramming](https://github.com/palgramming/Frontend_Mentor_Challenges/tree/master/intro_component_with_signup_form) - [Live](https://palgramming.github.io/Frontend_Mentor_Challenges/intro_component_with_signup_form/index.html)
 
