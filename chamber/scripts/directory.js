document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphics = document.querySelector("#graphic");

// variables for API Key-, 


const myURL =`https://api.openweathermap.org/data/2.5/weather?lat=-1.3620391138143308&lon=36.97740031851115&appid=5c22d942704072055274ce96f32be6ce&units=metric`

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

  function displayResults(data) {
    myTown.innerHTML = data.name
    myTemperature.innerHTML = `${data.main}&deg;F`;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc =`https://openweathermap.org/img/wn/${data.weather[0].icon}10d@2x.png;`
    myGraphics.setAttribute('src', iconsrc);
    myGraphics.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
    
    
  }
  
  apiFetch();

  