import "../styles/CityCard.css";

export default function CityCard({ city, region, country, onClick }) {
  return (
    <div className="cityCardContainer" onClick={onClick}>
      <div className="citiName">{city}</div>
      <div className="regionContainer">
        <div>
          {region}, {country}
        </div>
      </div>
    </div>
  );
}
