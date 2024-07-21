import "../styles/LocationAlert.css";

interface LocationAlertProps {
  onClose: () => void;
}

export default function LocationAlert({ onClose }: LocationAlertProps) {
  return (
    <div className="alertContainer">
      <div className="alertContent">
        <div>
          Search a city or reset the location permission state using your
          browser
        </div>
        <div>
          <button onClick={onClose} className="alertButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
