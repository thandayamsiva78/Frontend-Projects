const key = "90ebede633d7ad8145acaf3c4153a34b";

const inputEle = document.getElementById('input');
const locEle = document.getElementById('location');
const tempele = document.getElementById('temperature');
const weatherdescEle = document.getElementById('weather-description');
const btnEle = document.getElementById('search-btn');


function weather() {
  const loc = inputEle.value.trim();  // Assign and trim input value

  // Validate input
  if (loc === '') {
    alert('Please enter a location');
    return;
  }

  // Corrected template literal
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === '404') {
        alert('Location not found. Please try again.');
        inputEle.value = '';
        return;
      }
      console.log(data)

      const { name } = data;
      const { feels_like } = data.main;
      const { description } = data.weather[0];

      // Update 
      locEle.innerText = name;
      tempele.innerText = `Temperature: ${Math.floor(feels_like - 273)}°C`;  // Convert Kelvin to Celsius
      weatherdescEle.innerText = `Description: ${description}`;
    })
    .catch((err) => {
      alert('Error fetching weather data. Please try again.');
      console.error(err);
    });

  inputEle.value = '';  // Clear input
};


