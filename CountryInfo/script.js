const API_URL = 'https://restcountries.com/name/';

const getCountryData = async (countryName) => {
  const response = await fetch(`${API_URL}${countryName}`);
  const data = await response.json();
  return data;
};

const renderCountryInfo = (data) => {
  const countryInfoElement = document.querySelector('.country-info');
  countryInfoElement.innerHTML = `
    <h3>${data.name}</h3>
    <h4>${data.region}</h4>
    <p>Population: ${data.population}</p>
    <p>Languages: ${data.languages}</p>
    <p>Currencies: ${data.currencies}</p>
  `;
};

const countryName = prompt('Enter the name of a country:');

getCountryData(countryName).then(renderCountryInfo);
