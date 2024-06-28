import "../styles/CityCard.css";

export default function CityCard({ city, region, country }) {
  return (
    <div className="cityCardContainer">
      <div className="citiName">{city}</div>
      <div className="regionContainer">
        <div>{region},</div>
        <div>{country}</div>
      </div>
    </div>
  );
}
