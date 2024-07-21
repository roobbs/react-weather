import "../styles/CityCard.css";

interface CityCardProps {
  city: string;
  region: string;
  country: string;
  onClick: () => void;
}

export default function CityCard({
  city,
  region,
  country,
  onClick,
}: CityCardProps) {
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
