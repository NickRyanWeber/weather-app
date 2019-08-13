const state = {
  appID: '2c8556edea9808d01752c86030b3ad3e',
  location: '',
  locationSelector: 'q',
  temperature: 0,
  locationName: ''
}

const getweather = async () => {
  state.location = document
    .querySelector('.location-enter')
    .value.replace(' ', '%20')

  if (parseInt(state.location)) {
    state.locationSelector = 'zip'
  } else {
    state.locationSelector = 'q'
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${
      state.locationSelector
    }=${state.location}&appid=${state.appID}&units=imperial`
  )

  if (response.status === 200) {
    const weather = await response.json()
    console.log(weather)
    state.temperature = weather.main.temp
    state.locationName = weather.name
  }

  document.querySelector('.current-weather').textContent = `${
    state.locationName
  } - ${state.temperature}\u00B0 F`
}

document.querySelector('.search-btn').addEventListener('click', getweather)
