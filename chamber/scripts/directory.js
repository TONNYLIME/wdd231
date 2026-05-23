const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');

    const expanded = navbutton.classList.contains('show');
    navbutton.setAttribute('aria-expanded', expanded);
});
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Output the date the document was last modified in the second footer paragraph
// Assumes the second paragraph in the footer has an ID of "lastModified"
document.getElementById("lastModified").innerHTML = 
    `Last modified: ${document.lastModified}`;
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");

    if (!response.ok) {
      throw new Error("Failed to fetch member data");
    }

    const data = await response.json();

    displayMembers(data.members);

  } catch (error) {
    console.error("Error loading member data:", error);

    membersContainer.innerHTML = `
      <p class="error">
        Unable to load member directory.
      </p>
    `;
  }
}

function displayMembers(members) {

  membersContainer.innerHTML = "";

  members.forEach(member => {

    const card = document.createElement("section");
    card.classList.add("member-card");

    // Website link only if available
    const websiteHTML = member.website
      ? `
        <a href="${member.website}" 
           target="_blank" 
           rel="noopener noreferrer">
           Visit Website
        </a>
      `
      : `<p class="no-website">No Website Available</p>`;

    // Membership label
    let membershipName = "";

    switch (member.membershipLevel) {
      case 1:
        membershipName = "Member";
        break;
      case 2:
        membershipName = "Silver";
        break;
      case 3:
        membershipName = "Gold";
        break;
      default:
        membershipName = "Unknown";
    }

    card.innerHTML = `
      <img 
        src="images/${member.image}" 
        alt="${member.name} logo"
        loading="lazy"
        width="30"
        height="20"
      >

      <h3>${member.name}</h3>

      <p>${member.address}</p>

      <p>${member.phone}</p>

      ${websiteHTML}

      <p class="membership">
        Membership Level: ${membershipName}
      </p>

      <p>${member.description}</p>
    `;

    membersContainer.appendChild(card);

  });
}

// Grid view
gridButton.addEventListener("click", () => {

  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");

});

// List view
listButton.addEventListener("click", () => {

  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");

});

// Initialize app
getMembers();
// select html elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// create required variables for the url
const myKey = "3aae3396ed64923251d7663ec754c1fe"
const myLat = "-1.2833"
const myLong = "36.8167"

// construct a full path using template literals
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`

// grabbing the current weather data
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
        displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

//display the json it my web page
function displayResults(data){
    console.log('hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML =`${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);


    
   
}

apiFetch();
