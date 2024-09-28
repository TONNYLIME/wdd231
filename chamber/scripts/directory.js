document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
//http://api.weatherapi.com/v1/current.json?key=50dc6befd7e54bc7a9f203358242809&q=kenya&aqi=no

const temperatureField = document.querySelector('.temp');
const locationField = document.querySelector(".time_location p");
const dataAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector(".form")

form.addEventListener('search', searchForLocation)

let target = 'Kisumu'

const fetchResults = async (targetLocation) =>{
    let url  = `http://api.weatherapi.com/v1/current.json?key=50dc6befd7e54bc7a9f203358242809&q=kenya&aqi=no`

    const res = await fetch(url)

    const data = await res.json()
 

    console.log(data)
    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    function updateDetails(temp,locationName,time, condition){
        temperatureField.innerText = temp
        locationField.innerText = locationName
        dataAndTimeField.innerText = time
        conditionField = condition

    }

function searchForLocation(e){
    e.preventDefault()
    target = searchField.vslue
    fetchResults(target)
    }
}

fetchResults(target)

