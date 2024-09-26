const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data response
  }
  
  getProphetData();
  async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();
  const displayProphets = (prophets) => {
    // card build code goes here
  }
  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
  
    });
  }
  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.fullName} Joseph Smith`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute(src="https://assets.churchofjesuschrist.org/ec/f8/ecf80a88e31429d0aa0eeec6e2c74851a4bf4235/nauvoo_temple_joseph_art_lds.jpeg"
    );
      portrait.setAttribute('alt', `Portrait of ${prophet.fullName} Joseph Smith`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(prophets); //fill in the blank
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }