export default function DayCard(props) {
  return (
    <div className="dayCard">
      <div className="dayNumber">{props.date}</div>
      <div>
        <div>{props.condition}</div>
        <img src={props.img} alt="dayImg" />
        <div>{props.maxTemp} C°</div>
        <div>{props.minTemp} C°</div>
        <div>Chance of Rain: {props.rain}%</div>
      </div>
    </div>
  );
}
