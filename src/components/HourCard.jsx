export default function HourCard(props) {
  return (
    <div className="hourCard">
      <div>{props.num}</div>
      <div>
        <div>{props.condition}</div>
        <img src={props.img} alt="hourImg" />
        <div>{props.temp} C°</div>
      </div>
    </div>
  );
}
