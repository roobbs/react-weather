import { useState } from "react";

export default function HourCard(props) {
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
      {moreInfo && (
        <div className="moreInfoActive">
          <div className="hourInfoActive">
            <div>Rain:</div>
            <div className="hourInfoNumber">{props.rain}%</div>
          </div>
          <div className="hourInfoActive">
            <div>Wind:</div>{" "}
            <div className="hourInfoNumber">{props.wind} k/h</div>
          </div>
          <div className="hourInfoActive">
            <div>Clouds:</div>{" "}
            <div className="hourInfoNumber">{props.cloud}%</div>
          </div>
          <div className="hourInfoActive">
            <div>Humidity:</div>{" "}
            <div className="hourInfoNumber">{props.humidity}%</div>
          </div>
          <div className="hourInfoActive">
            <div>UV level:</div>{" "}
            <div className="hourInfoNumber">{props.uv}</div>
          </div>
        </div>
      )}
    </div>
  );
}
