import Header from "./Header";
import SideBar from "./SideBar";
import HourCard from "./HourCard";
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
        console.log(locat);
        setWeatherObj(locat);
        setLocation(locat.location.name);
      });
  }, [search]);

  function handleSearch(loc) {
    setSearch(loc);
  }

  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return (
    <div className="main">
      <Header city={location} handleChange={handleSearch} />
      <div className="content">
        {weatherObj ? (
          <>
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
            <div className="rightContainer">
              <div className="forecastHourContainer">
                <div className="forecastTitle">
                  Forecast for the next few hours
                </div>
                <div className="forecastHourly">
                  {hours.map((hour, index) =>
                    index >= currentHour - 12 ? (
                      <HourCard
                        key={index}
                        num={hour}
                        img={
                          weatherObj.forecast.forecastday[0].hour[hour]
                            .condition.icon
                        }
                        condition={
                          weatherObj.forecast.forecastday[0].hour[hour]
                            .condition.text
                        }
                        temp={
                          weatherObj.forecast.forecastday[0].hour[hour].temp_c
                        }
                      />
                    ) : null
                  )}
                </div>
              </div>
              <div className="nextDays">NextDays or something</div>
            </div>
          </>
        ) : (
          <div className="undefined">Search for a city //</div>
        )}
      </div>
    </div>
  );
}
