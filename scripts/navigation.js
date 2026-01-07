// store the selected element
const navbutton = document.querySelector('#ham-btn')

//Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});

// select the nav element
const navBar = document.querySelector('#nav-bar');

// toggle the button to add or remove class of 'SHOW'
navbutton.addEventListener ('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Output the date the document was last modified in the second footer paragraph
// Assumes the second paragraph in the footer has an ID of "lastModified"
document.getElementById("lastModified").innerHTML = 
    `Last modified: ${document.lastModified}`;