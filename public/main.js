const city = document.querySelector('.location-input')

// Create Search
const createSearch = () => {
  const inputValue = city.value
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = '327b0be96e656ea859661f0ccae3fab5'
  const newUrl =
    url + '?' + 'q=' + inputValue + '&units=imperial' + '&appid=' + apiKey
  return newUrl
}
// Search Results
const searchResults = () => {
  // eslint-disable-next-line no-undef
  fetch(createSearch())
    .then(response => {
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.city-name').textContent = city.name
      document.querySelector('.weather').textContent = city.weather[0].main
      document.querySelector('.temp').textContent = city.main.temp
    })
}

document
  .querySelector('.get-weather-btn')
  .addEventListener('click', searchResults)
