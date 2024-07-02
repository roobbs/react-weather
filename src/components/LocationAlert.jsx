import "../styles/LocationAlert.css";

export default function LocationAlert({ onClose }) {
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
