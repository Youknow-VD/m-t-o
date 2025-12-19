import fetch from 'node-fetch';

// Remplacez 'votre_cle_api' par votre clé API OpenWeatherMap
const API_KEY = '5fe9d267d5760053718b7decad8a1651';

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erreur API: ' + response.statusText);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Erreur lors de la récupération des données:', err.message);
  }
}

async function main() {
  const ville = 'Dakar';
  const meteo = await getWeather(ville);
  if (meteo) {
    console.log(`Météo à ${meteo.name} : ${meteo.weather[0].description}`);
    console.log(`Température : ${meteo.main.temp} °C`);
    console.log(`Vent : ${meteo.wind.speed} m/s`);
  }
}

main();
