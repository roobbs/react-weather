import { useState } from "react";
import "../styles/HourCard.css";
import { TbUvIndex } from "react-icons/tb";
import { WiRain } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

interface HourCardProps {
  num: number;
  condition: string;
  img: string;
  temp: number;
  rain: number;
  wind: number;
  cloud: number;
  humidity: number;
  uv: number;
}

export default function HourCard(props: HourCardProps) {
  const [moreInfo, setMoreInfo] = useState(false);
  function handleMoreInfo() {
    setMoreInfo(!moreInfo);
  }
  return (
    <div className="hourCardTotalInfo" onClick={handleMoreInfo}>
      <div className="hourCard">
        <div className="hourNumber">{props.num}</div>
        <div>
          <div>{props.condition}</div>
          <img src={props.img} alt="hourImg" />
          <div>{props.temp} C°</div>
          {moreInfo ? (
            <div className="moreInfoArrow">
              Less<p className="arrow">«</p>
            </div>
          ) : (
            <div className="moreInfoArrow">
              More<p className="arrow">»</p>
            </div>
          )}
        </div>
      </div>

      <div
        className={moreInfo ? "moreInfoActive showDayCard" : "moreInfoActive"}
      >
        <div className="hourInfoActive">
          <div className="hourCardIconContainer">
            <WiRain className="hourCardIcon" size={22} />
            Rain:
          </div>
          <div className="hourInfoNumber">{props.rain}%</div>
        </div>
        <div className="hourInfoActive">
          <div className="hourCardIconContainer">
            <WiStrongWind className="hourCardIcon" size={22} />
            Wind:
          </div>
          <div className="hourInfoNumber">{props.wind} k/h</div>
        </div>
        <div className="hourInfoActive">
          <div className="hourCardIconContainer">
            <WiCloudy className="hourCardIcon" size={22} />
            Clouds:
          </div>
          <div className="hourInfoNumber">{props.cloud}%</div>
        </div>
        <div className="hourInfoActive">
          <div className="hourCardIconContainer">
            <WiHumidity className="hourCardIcon" size={22} />
            Humidity:
          </div>
          <div className="hourInfoNumber">{props.humidity}%</div>
        </div>
        <div className="hourInfoActive">
          <div className="hourCardIconContainer">
            <TbUvIndex className="hourCardIcon" size={22} />
            UV level:
          </div>
          <div className="hourInfoNumber">{props.uv}</div>
        </div>
      </div>
    </div>
  );
}
