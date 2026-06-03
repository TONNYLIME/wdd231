import { discover1 } from "../data/discover1.mjs";

const discoverSection = document.querySelector("#discover");
discoverSection.classList.add("discover-grid");

discover1.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("card", `card${index + 1}`);

  
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.width = 300;
  img.height = 200;
  img.loading = "lazy";
  

  
  

  // NAME
  const title = document.createElement("h2");
  title.textContent = item.name;
  

  // DESCRIPTION
  const description = document.createElement("p");
  description.textContent = item.description;
  

  // ADDRESS (optional)
  const address = document.createElement("address");
  address.textContent = item.address;
  

  const button = document.createElement("button");
  button.textContent = item.information;
  
  
  card.append(title, img, address, description, button);
  discoverSection.appendChild(card);

  
});

const messageContainer = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  // First visit
  messageContainer.textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  const difference = now - Number(lastVisit);
  const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysBetween < 1) {
    messageContainer.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    messageContainer.textContent = "You last visited 1 day ago.";
  } else {
    messageContainer.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

// Store current visit
localStorage.setItem("lastVisit", now);
