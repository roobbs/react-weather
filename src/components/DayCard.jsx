export default function DayCard(props) {
  const firstDay = props.date;
  let day = firstDay.split("-");
  const today = new Date().getDate();
  if (today === day[2] - 1) {
    day = "Tomorrow";
  } else {
    day = firstDay;
  }

  return (
    <>
      <div className="dayCard">
        <div className="dayNumber">{day}</div>
        <div>
          <div>{props.condition}</div>
          <img src={props.img} alt="dayImg" />
          <div>{props.maxTemp} C°</div>
          <div>{props.minTemp} C°</div>
          <div>Chance of Rain: {props.rain}%</div>
        </div>
      </div>
      <div>HELLO</div>
    </>
  );
}
