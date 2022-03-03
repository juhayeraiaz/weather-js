const API_KEY = `703009c884855ab9713697b24a29a522`
const searchTemperature = () => {
    const searchField = document.getElementById('city-name');
    searchText = searchField.value;
    searchField.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img = document.getElementById('weather-icon');
    img.setAttribute('src', url);
}