import Header from "./Header";
import SideBar from "./SideBar";
import HourCard from "./HourCard";
import DayCard from "./DayCard";
import { useEffect, useState } from "react";

// const key = "fdd09a79a4d5440a8ad165337231011&q";

export default function Content() {
  const [search, setSearch] = useState("Inicial");
  const [location, setLocation] = useState("undefined");
  const [weatherObj, setWeatherObj] = useState();

  useEffect(() => {
    if (search === "Inicial") return;
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=" +
        search +
        "&days=3&aqi=no&alerts=no",
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

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return (
    <div className="main">
      <Header city={location} handleChange={handleSearch} />
      <div className="content">
        {weatherObj ? (
          <>
            <SideBar
              hour={currentHour}
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
                  {weatherObj.forecast.forecastday[0].hour.map((hour, index) =>
                    index >= currentHour + 1 ? (
                      <HourCard
                        key={index}
                        num={index}
                        img={hour.condition.icon}
                        condition={hour.condition.text}
                        temp={hour.temp_c}
                      />
                    ) : null
                  )}
                </div>
              </div>
              <div className="nextDays">
                {weatherObj.forecast.forecastday.map((day, index) =>
                  index !== 0 ? (
                    <DayCard
                      key={index}
                      date={day.date}
                      condition={day.day.condition.text}
                      img={day.day.condition.icon}
                      maxTemp={day.day.maxtemp_c}
                      minTemp={day.day.mintemp_c}
                      rain={day.day.daily_chance_of_rain}
                    />
                  ) : null
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="undefined">Search for a city //</div>
        )}
      </div>
    </div>
  );
}
