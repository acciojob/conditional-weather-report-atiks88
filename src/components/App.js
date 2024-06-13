import React from "react";
import './../styles/App.css';
import WeatherDisplay from "../components/WeatherDisplay";

const App = () => {
  const [city, setCity] = useState("paratwada");
  const [Temp,setTemp] = useState(25);
  const [conditions,setConditions] = useState("Sunny");

  const apiKey = "7b99a09d28aa86c3bfd0878a634f4cfd";
  const lat = "21.273060";
  const lon = "77.523422";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;  

  useEffect(()=>{
    const FetchData = async(url)=>{
      try{
       const response = await fetch (url);
       if(!response.ok)
        {
          alert("Network Error: " + response.message);
        }
        const data = await response.json();
        setTemp((data.main.temp - 273.15).toFixed(2));//converting kelvin to feranite kaam ka code
        setConditions(data.weather[0].main);
        setCity(data.name);
        console.log(data);
      }
      catch(error)
      {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    FetchData(url);
  },[url]);

  
  return (
    <div className="App">
      <WeatherDisplay city={city} Temp={Temp} conditions={conditions}/>
    </div>
  );
}

export default App
