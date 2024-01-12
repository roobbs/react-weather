export default function SideBar(props) {
  return (
    <div className="sideBar">
      <div>
        Current Weather{" "}
        <div className="currentHourNumber">{props.hour} hrs</div>
      </div>
      <div className="currentInfo">
        <img src={props.image} alt="img" />
        <div>{props.current} C°</div>
        <div>{props.currentText}</div>
      </div>
      <div className="generalInfo">
        <div className="smallInfo">
          Feels Like: <p>{props.feels} C°</p>
        </div>
        <div className="smallInfo">
          Humidity: <p>{props.humidity} %</p>
        </div>
        <div className="smallInfo">
          Clouds: <p>{props.clouds} %</p>
        </div>
        <div className="smallInfo">
          Rain: <p>{props.rain} %</p>
        </div>
        <div className="smallInfo">
          Wind: <p>{props.wind} K/h</p>
        </div>
        <div className="smallInfo">
          UV Level: <p>{props.uv}</p>
        </div>
      </div>
    </div>
  );
}
