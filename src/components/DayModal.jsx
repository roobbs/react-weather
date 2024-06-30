import { IoMdCloseCircle } from "react-icons/io";
import "../styles/DayModal.css";

export default function DayModal({ onClose, info }) {
  return (
    <div className="background">
      <IoMdCloseCircle onClick={onClose} size={30} className="closeIcon" />
      <div className="dayModalContent">
        <div>HOLA ESTE ES EL MODAL </div>
        <div>{info.day.maxtemp_c} </div>
        <div>{info.day.condition.text}</div>
      </div>
    </div>
  );
}
