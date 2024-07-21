import "../styles/DayCard.css";
import { WiDirectionUp } from "react-icons/wi";
import { WiDirectionDown } from "react-icons/wi";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { WiRain } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";

interface DayCardProps {
  date: string;
  condition: string;
  img: string;
  maxTemp: number;
  minTemp: number;
  rain: number;
  wind: number;
  uv: number;
  sunrise: string;
  sunset: string;
  openModal: () => void;
}

export default function DayCard(props: DayCardProps) {
  const firstDay = props.date;
  let day: string | string[] = firstDay.split("-");
  const today = new Date().getDate();
  if (today === Number(day[2]) - 1) {
    day = "Tomorrow";
  } else {
    day = firstDay;
  }

  return (
    <a className="dayCardContainer" onClick={props.openModal} href="#header">
      <div className="dayCard">
        <div className="dayNumber">{day}</div>
        <div className="dayCardInfo">
          <div>{props.condition}</div>
          <img src={props.img} alt="dayImg" />
          <div className="maxTemp">
            <WiDirectionUp size={30} className="dayCardIcon" />
            {props.maxTemp} C°
          </div>
          <div className="minTemp">
            <WiDirectionDown size={30} className="dayCardIcon" />
            {props.minTemp} C°
          </div>
        </div>
      </div>
      <div className="moreDayInfo">
        <div className="hourInfoActive">
          <div className="dayCardMoreInfo">
            <WiRain className="dayCardIcon" size={23} />
            Chance of rain:
          </div>
          <div className="hourInfoNumber">{props.rain}%</div>
        </div>
        <div className="hourInfoActive">
          <div className="dayCardMoreInfo">
            <WiStrongWind className="dayCardIcon" size={23} />
            Max. wind:
          </div>
          <div className="hourInfoNumber">{props.wind} k/h</div>
        </div>
        <div className="hourInfoActive">
          <div className="dayCardMoreInfo">
            <TbUvIndex className="dayCardIcon" size={23} />
            UV Level:
          </div>
          <div className="hourInfoNumber">{props.uv}</div>
        </div>
        <div className="hourInfoActive">
          <div className="dayCardMoreInfo">
            <CiSun className="dayCardIcon" size={23} /> Sunrise:
          </div>
          <div className="hourInfoNumber">{props.sunrise}</div>
        </div>
        <div className="hourInfoActive">
          <div className="dayCardMoreInfo">
            <IoMoonOutline className="dayCardIcon" size={23} />
            Sunset:
          </div>
          <div className="hourInfoNumber">{props.sunset}</div>
        </div>

        <div className="moreInfoArrow">
          See more (hourly)<p className="arrow">»</p>
        </div>
      </div>
    </a>
  );
}
