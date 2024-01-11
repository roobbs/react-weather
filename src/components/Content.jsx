import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export default function Content() {
  const [search, setSearch] = useState("Inicial");
  const [location, setLocation] = useState("undefined");
  const [weatherObj, setWeatherObj] = useState();

  useEffect(() => {
    if (search === "Inicial") return;
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=" +
        search,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((response) => {
        const locat = response;
        setWeatherObj(locat);
        setLocation(locat.location.name);
      });
  }, [search]);

  function handleSearch(loc) {
    setSearch(loc);
  }
  return (
    <div className="main">
      <Header city={location} handleChange={handleSearch} />
      <div className="content">
        {weatherObj && (
          <SideBar
            image={weatherObj.current.condition.icon}
            current={weatherObj.current.temp_c}
            currentText={weatherObj.current.condition.text}
            feels={weatherObj.current.feelslike_c}
            humidity={weatherObj.current.humidity}
            clouds={weatherObj.current.cloud}
            rain={weatherObj.current.precip_mm}
            wind={weatherObj.current.wind_kph}
            uv={weatherObj.current.uv}
          />
        )}
      </div>
    </div>
  );
}
