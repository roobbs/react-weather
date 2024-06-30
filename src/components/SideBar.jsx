import "../styles/SideBar.css";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { TbUvIndex } from "react-icons/tb";
import { WiRain } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

export default function SideBar(props) {
  return (
    <div className="sideBar">
      <div>
        <div className="sidebarTitle">Current Weather </div>
        <div className="currentHourNumber">{props.hour} hrs</div>
      </div>
      <div className="currentInfo">
        <img src={props.image} alt="img" />
        <div>{props.current} C°</div>
        <div>{props.currentText}</div>
      </div>
      <div className="generalInfo">
        <div className="smallInfo">
          <div className="iconContainer">
            <WiThermometer size={23} className="currentWeatherIcon" />
            Feels Like:
          </div>{" "}
          <p>{props.feels} C°</p>
        </div>
        <div className="smallInfo">
          <div className="iconContainer">
            <WiHumidity size={23} className="currentWeatherIcon" />
            Humidity:
          </div>
          <p>{props.humidity} %</p>
        </div>
        <div className="smallInfo">
          <div className="iconContainer">
            <WiCloudy size={23} className="currentWeatherIcon" />
            Clouds:
          </div>
          <p>{props.clouds} %</p>
        </div>
        <div className="smallInfo">
          <div className="iconContainer">
            <WiRain size={23} className="currentWeatherIcon" /> Rain:
          </div>{" "}
          <p>{props.rain} %</p>
        </div>
        <div className="smallInfo">
          <div className="iconContainer">
            <WiStrongWind size={23} className="currentWeatherIcon" />
            Wind:
          </div>{" "}
          <p>{props.wind} k/h</p>
        </div>
        <div className="smallInfo">
          <div className="iconContainer">
            <TbUvIndex size={23} className="currentWeatherIcon" />
            UV Level:
          </div>
          <p>{props.uv}</p>
        </div>
      </div>
      <div className="sun">
        <div className="sunriseCard">
          <LuSunrise size={30} />
          <div className="sunData">{props.sunrise}</div>
        </div>
        <div className="sunsetCard">
          <LuSunset size={30} />
          <div className="sunData">{props.sunset}</div>
        </div>
      </div>
    </div>
  );
}
