import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export default function Content() {
  const [location, setLocation] = useState("Dolores Hidalgo");

  useEffect(() => {
    async function getWeather(location) {
      try {
        let getForecast = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=" +
            location,
          { mode: "cors" }
        );
        let forecast = await getForecast.json();
        displayWeather(forecast);
      } catch (error) {
        console.log("Something happen " + error);
      }
    }
  }, [location]);

  function handleLocation(loc) {
    setLocation(loc);
  }
  return (
    <div className="main">
      <Header city={location} handleChange={handleLocation} />
      <div className="content">
        <SideBar />
      </div>
    </div>
  );
}
