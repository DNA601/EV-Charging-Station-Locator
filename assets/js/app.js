const apikey = '2RWEmIH2pRUJZcqZ1v5HIAPtokWgcKHxrzrK8GK2'
//Do we still need mapApiKey?
const mapApiKey = 'AIzaSyCwOpX2oKnyXKnYiW9qPF3jQ4cmQpmVxyY'
let stationArr = JSON.parse(localStorage.getItem('station')) || []
const searchInput = document.getElementById('searchInput')
const bgLocationCard = document.getElementById('bgLocationCard')
const fiveCards = document.getElementById('fiveCards')
const cardBtns = document.getElementsByClassName('cardBtns')
const savedLocations = document.getElementById('savedLocations')
const mapDiv = document.getElementById('mapDiv')

// Click start_Button to use station search 
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("main").classList.remove("hidden")
  document.getElementById("startBtn").classList.add("hidden")
  document.getElementById("the").classList.add("hidden")
  document.getElementById("find").classList.add("hidden")
});

// Click search_Button to find a station
const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getApi(searchInput.value)
})

// Retrieve and display station location and retail information 
function getApi(location) {

  //https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/nearest/

  var requestUrl = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?location=${location}&fuel_type_code='ELEC'&radius=5.0&api_key=${apikey}`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);

      // TODO: Run functions
      dataDisplay1(data.fuel_stations[0])
      dataDisplay5(data.fuel_stations, 6)
    });
}

// Create and display from saved_Search and search_Station selections to map_Section by ID
function getApiByID(location) {
  //https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/get/

  var requestUrl = ` https://developer.nrel.gov/api/alt-fuel-stations/v1/${location}.json?api_key=${apikey}`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);

      // TODO: Run functions
      dataDisplay1(data.alt_fuel_station)
    });
}

// View EV stations on a map in your given (search parameter) region
// Attach your callback function to the `window` object
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("mapDiv"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
window.initMap = initMap;

// Create display for station info on map_Section
function dataDisplay1(arr, price) {
  bgLocationCard.innerHTML = ''
  const BLC = document.createElement('div')
  arr.ev_pricing == null ? price = 'free' : price = arr.ev_pricing
  BLC.innerHTML = `
      <h4 onclick="test()" class='cardBtns'>${arr.station_name}</h4>
      <p>${arr.distance.toFixed(2)} MPH</p> 
      <p>${arr.street_address}</p> 
      <p>${arr.city}, ${arr.state}, ${arr.zip}</p> 
      <p>${arr.station_phone}</p> 
      <p>${arr.ev_connector_types}</p> 
      <p>${price}</p> 
      `
  bgLocationCard.appendChild(BLC)
  saveStation(arr.station_name)
}

// Create display for station info on nearby_Locations section
function dataDisplay5(arr, length) {
  const card = document.createElement('div')
  card.classList.add('card')
  fiveCards.innerHTML = "";

  for (let i = 1; i < length; i++) {
    arr[i].ev_pricing == null ? price = 'free' : price = arr[i].ev_pricing

    const stationInfo = document.createElement('aside')
    stationInfo.innerHTML = `
    <p>${arr[i].distance.toFixed(2)}</p>
    <p>${arr[i].street_address}</p> 
    <p>${arr[i].city}, ${arr[i].state}, ${arr[i].zip}</p> 
    <p>${arr[i].station_phone}</p> 
    <p>${arr[i].ev_connector_types}</p> 
    <p>${price}</p> 
    `
    card.appendChild(stationInfo)

    const cardBtn = document.createElement('button')
    cardBtn.classList.add('cardBtns')
    cardBtn.textContent = arr[i].station_name
    cardBtn.setAttribute('value', `${arr[i].id}`)
    stationInfo.prepend(cardBtn)
    cardBtn.addEventListener('click', () => {
      getApiByID(cardBtn.value)
      console.log(cardBtn.value)
      saveStation(cardBtn.textContent)
    })
  }
  fiveCards.appendChild(card)
}

// Save searches
function saveStation(content) {
  if (!stationArr.includes(content)) {
    stationArr.push(content)
    let stations = JSON.stringify(stationArr)
    localStorage.setItem('station', stations)
    displaySearches()
  }
}

//Create display previous searches as buttons 
function displaySearches() {
  if (!localStorage.station) { return }
  let searches = JSON.parse(localStorage.getItem('station'))

  savedLocations.innerHTML = ''
  for (let i = 0; i < searches.length; i++) {
    let searchItem = document.createElement('button')
    searchItem.textContent = searches[i]
    searchItem.setAttribute('class', 'searchItem')
    savedLocations.appendChild(searchItem)
  }
} displaySearches()

//returns ascending distance list
//default loads with last searched

//Search Buttons
//retailer Name
//Zip

//BLC
//h4 - retailer name 
//p - distance
//p - address
//p - City, State, Zip
//p - phone
//p - ev connector type
//p - ev_pricing

//Nearby
//div - 5 cards w/
//h4 - retailer name 
//p - distance
//p - address
//p - City, State, Zip
//p - phone
//p - ev connector type
//p - ev_pricing


