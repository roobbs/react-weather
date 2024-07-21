import Header from "./Header.tsx";
import SideBar from "./SideBar.tsx";
import HourCard from "./HourCard.tsx";
import DayCard from "./DayCard.tsx";
import { useEffect, useState } from "react";
import "../styles/Content.css";
import DayModal from "./DayModal.tsx";
import LocationAlert from "./LocationAlert.tsx";
import Loader from "./Loader.tsx";

interface HourInfo {
  condition: {
    icon: string;
    text: string;
  };
  temp_c: number;
  chance_of_rain: number;
  wind_kph: number;
  cloud: number;
  humidity: number;
  uv: number;
}

interface DayInfo {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    uv: number;
    daily_chance_of_rain: number;
    maxwind_kph: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: HourInfo[];
}

interface WeatherObj {
  location: {
    name: string;
    region: string;
  };
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    cloud: number;
    precip_mm: number;
    wind_kph: number;
    uv: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          icon: string;
          text: string;
        };
        maxtemp_c: number;
        mintemp_c: number;
        avghumidity: number;
        uv: number;
        daily_chance_of_rain: number;
        maxwind_kph: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: HourInfo[];
    }[];
  };
}

export default function Content() {
  const [search, setSearch] = useState<string>(
    localStorage.getItem("lastCity") || "Guadalajara"
  );
  const [weatherObj, setWeatherObj] = useState<WeatherObj | null>(null);
  const [dayModalInfo, setDayModalInfo] = useState<DayInfo | {}>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=" +
        search +
        "&days=3&aqi=no&alerts=no",
      { mode: "cors" }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        const locat = response;
        if (response) setWeatherObj(locat);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [search]);

  useEffect(() => {
    setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            handleSearch(`${latitud},${longitud}`);
          },
          function (error) {
            console.error("Error getting position: " + error.message);
            if (error.message === "User denied Geolocation") {
              setOpenAlert(true);
              setTimeout(() => {
                setOpenAlert(false);
              }, 8000);
            }
          }
        );
      } else {
        console.error("Geolocation is not supported in this browser.");
      }
    }, 100);
  }, []);

  function handleSearch(loc: string) {
    localStorage.setItem("lastCity", loc);
    setSearch(loc);
  }

  async function setModalInfo(day: DayInfo) {
    console.log(day);
    await setDayModalInfo(day);
    await setOpenModal(true);
  }

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return (
    <div className="main">
      {openAlert && <LocationAlert onClose={() => setOpenAlert(false)} />}

      <Header
        city={weatherObj ? weatherObj.location.name : null}
        region={weatherObj ? weatherObj.location.region : null}
        handleChange={handleSearch}
      />
      <div className="content">
        {!weatherObj && <Loader />}
        {weatherObj && !openModal && (
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
              sunset={weatherObj.forecast.forecastday[0].astro.sunset}
              sunrise={weatherObj.forecast.forecastday[0].astro.sunrise}
            />
            <div className="rightContainer">
              <div className="forecastHourContainer">
                {currentHour < 23 && (
                  <div className="forecastTitle">
                    Forecast for the next hours:
                  </div>
                )}

                <div className="forecastHourly">
                  {weatherObj.forecast.forecastday[0].hour.map((hour, index) =>
                    index >= currentHour + 1 ? (
                      <HourCard
                        key={index}
                        num={index}
                        img={hour.condition.icon}
                        condition={hour.condition.text}
                        temp={hour.temp_c}
                        rain={hour.chance_of_rain}
                        wind={hour.wind_kph}
                        cloud={hour.cloud}
                        humidity={hour.humidity}
                        uv={hour.uv}
                      />
                    ) : null
                  )}
                </div>
              </div>
              <div className="nextDaysContainer">
                <div className="nextDaysTitle">Next days:</div>
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
                        wind={day.day.maxwind_kph}
                        uv={day.day.uv}
                        sunrise={day.astro.sunrise}
                        sunset={day.astro.sunset}
                        info={day}
                        openModal={() => setModalInfo(day)}
                      />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {openModal && (
          <DayModal onClose={() => setOpenModal(false)} info={dayModalInfo} />
        )}
      </div>
    </div>
  );
}
