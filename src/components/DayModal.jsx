import { RiArrowGoBackLine } from "react-icons/ri";
import "../styles/DayModal.css";
import HourCard from "./HourCard.jsx";
import { WiDirectionUp } from "react-icons/wi";
import { WiDirectionDown } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { LuSunrise, LuSunset } from "react-icons/lu";

export default function DayModal({ onClose, info }) {
  return (
    <div className="modalContainer">
      <div className="closeIcon" onClick={onClose}>
        <RiArrowGoBackLine size={30} />
        Go back
      </div>
      <div className="dayModalContent">
        <div className="modalDayTitle">{info.date} </div>
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
          <div>{info.day.condition.text}</div>
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
  );
}
