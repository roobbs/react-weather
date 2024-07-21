import { RiArrowGoBackLine } from "react-icons/ri";
import "../styles/DayModal.css";
import HourCard from "./HourCard";
import { WiDirectionUp } from "react-icons/wi";
import { WiDirectionDown } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { LuSunrise, LuSunset } from "react-icons/lu";

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

interface AstroInfo {
  sunrise: string;
  sunset: string;
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
  astro: AstroInfo;
  hour: HourInfo[];
}

interface DayModalProps {
  onClose: () => void;
  info: DayInfo;
}

export default function DayModal({ onClose, info }: DayModalProps) {
  const firstDay = info.date;
  let day: string | string[] = firstDay.split("-");
  const today = new Date().getDate();
  if (today === Number(day[2]) - 1) {
    day = `Tomorrow (${info.date})`;
  } else {
    day = firstDay;
  }

  return (
    <div>
      <div className="closeIcon" onClick={onClose}>
        <RiArrowGoBackLine size={30} />
        Go back
      </div>
      <div className="modalContainer">
        <div className="dayModalContent">
          <div className="modalDayTitle">{day}</div>
          <div className="modalCondition">{info.day.condition.text}</div>
          <div className="modalCondition">
            <div className="minMaxTemp">
              <img src={info.day.condition.icon} alt="weatherIcon" />
              <div style={{ display: "flex" }}>
                <div className="modalMaxTemp">
                  <WiDirectionUp size={40} className="modalIcon" />
                  {info.day.maxtemp_c} C°
                </div>
                <div className="modalMinTemp">
                  <WiDirectionDown size={40} className="modalIcon" />
                  {info.day.mintemp_c} C°
                </div>
              </div>
            </div>
          </div>
          <div className="modalSmallInfoContainer">
            <div className="info">
              <div className="modalInfoIcon">
                <WiHumidity size={24} className="modalIcon" /> Humidity:
              </div>
              <div className="modalInfoNumber">{info.day.avghumidity}% </div>
            </div>
            <div className="info">
              <div className="modalInfoIcon">
                <TbUvIndex size={24} className="modalIcon" />
                UV level:
              </div>
              <div className="modalInfoNumber">{info.day.uv} </div>
            </div>
            <div className="info">
              <div className="modalInfoIcon">
                <WiRain size={24} className="modalIcon" />
                Chance of rain:
              </div>
              <div className="modalInfoNumber">
                {info.day.daily_chance_of_rain}%
              </div>
            </div>
            <div className="info">
              <div className="modalInfoIcon">
                <WiStrongWind size={24} className="modalIcon" />
                Max. wind:
              </div>
              <div className="modalInfoNumber">{info.day.maxwind_kph} k/h </div>
            </div>
          </div>
          <div className="sunInfoContainer">
            <div className="sunInfo">
              <LuSunrise size={23} />
              <div className="hourInfoNumber">{info.astro.sunrise}</div>
            </div>
            <div className="sunInfo">
              <LuSunset size={23} />
              <div className="hourInfoNumber">{info.astro.sunset}</div>
            </div>
          </div>
        </div>

        <div className="modalHourContainer">
          {info.hour.map((hr, index) => (
            <HourCard
              key={index}
              num={index}
              img={hr.condition.icon}
              condition={hr.condition.text}
              temp={hr.temp_c}
              rain={hr.chance_of_rain}
              wind={hr.wind_kph}
              cloud={hr.cloud}
              humidity={hr.humidity}
              uv={hr.uv}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
