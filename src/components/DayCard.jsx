import { useState } from "react";
import HourCard from "./HourCard";
import "../styles/DayCard.css";

export default function DayCard(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  const firstDay = props.date;
  let day = firstDay.split("-");
  const today = new Date().getDate();
  if (today === day[2] - 1) {
    day = "Tomorrow";
  } else {
    day = firstDay;
  }

  function handleMoreInfo() {
    setMoreInfo(!moreInfo);
  }

  return (
    <div className="dayCardContainer">
      <div className="dayCard" onClick={handleMoreInfo}>
        <div className="dayNumber">{day}</div>
        <div className="dayCardInfo">
          <div>{props.condition}</div>
          <img src={props.img} alt="dayImg" />
          <div className="maxTemp">{props.maxTemp} C°</div>
          <div className="minTemp">{props.minTemp} C°</div>
        </div>
      </div>
      <div className="moreDayInfo" onClick={handleMoreInfo}>
        <div className="hourInfoActive">
          <div>Chance of rain:</div>
          <div className="hourInfoNumber">{props.rain}%</div>
        </div>
        <div className="hourInfoActive">
          <div>Max. wind:</div>
          <div className="hourInfoNumber">{props.wind} k/h</div>
        </div>
        <div className="hourInfoActive">
          <div>UV Level:</div>
          <div className="hourInfoNumber">{props.uv}</div>
        </div>
        <div className="hourInfoActive">
          <div>Sunrise:</div>
          <div className="hourInfoNumber">{props.sunrise}</div>
        </div>
        <div className="hourInfoActive">
          <div>Sunset:</div>
          <div className="hourInfoNumber">{props.sunset}</div>
        </div>
        {moreInfo ? (
          <div className="moreInfoArrow">
            Less<p className="arrow">«</p>
          </div>
        ) : (
          <div className="moreInfoArrow">
            See Hourly<p className="arrow">»</p>
          </div>
        )}
      </div>
      {/* {moreInfo ? ( */}
      <div
        className={
          moreInfo
            ? "nextDaysHourlyContainer"
            : "nextDaysHourlyContainer showHourCards"
        }
      >
        {props.hourArray.map((hour, index) => (
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
        ))}
      </div>
      {/* ) : null} */}
    </div>
  );
}
