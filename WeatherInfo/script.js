
let input = document.getElementById("location")
let temperature = document.getElementById("temp-value")
let weatherType = document.getElementById("weather-type")
const apikey = 'b5c654c173d30d61d351f99cdf73c9f2';

btnEle.onclick = function(){
   if(input.value=="")
       alert("Please Enter the city name")
   else{
       location = input.value
       url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}`
       fetch(url)
       .then(res => res.json())
       .then(data =>{
           console.log(data)
           const{name} = data 
           const{feels_like} = data.main
           const{description} = data.weather[0]
           temperature.innerText = Math.floor(feels_like-273);
           weatherType.innerText = description;
       })
       .catch( () =>{
           alert("Location not found")
       })
       input.value = ""
   }
}
