import search from "../assets/buscar.png";
import sun from "../assets/sun.png";
import map from "../assets/map.png";
import { useState } from "react";

export default function Header({ city, handleChange }) {
  const [value, setValue] = useState("");

  function handlePress(event) {
    if (event.key === "Enter") {
      handleChange(value);
    }
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className="header">
      <img src={sun} alt="" className="logoImg" />
      <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
        <img src={map} alt="hola" className="locationImg" />
        <div>{city}</div>
      </div>
      <div className="input">
        <img src={search} alt="" className="searchImg" />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleValue}
          onKeyDown={handlePress}
        />
      </div>
    </div>
  );
}
