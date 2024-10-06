// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphics = document.querySelector("#graphics");

// variables for API Key
const myKey = "614eda27290aad4ab1e5780c9af6c5cb"
const myLat = "-1.293592946012799"
const myLong = "36.81716251150599"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();