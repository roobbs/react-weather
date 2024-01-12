import search from "../assets/buscar.png";
import sun from "../assets/sun.png";
import map from "../assets/map.png";
import { useState } from "react";

export default function Header({ city, handleChange }) {
  const [value, setValue] = useState("");
  // const [listOfCities, setListOfCities] = useState();

  // useEffect(() => {
  //   if (value === "" || value.length <= 3) return;
  //   fetch(
  //     "http://api.weatherapi.com/v1/search.json?key=fdd09a79a4d5440a8ad165337231011&q&q=" +
  //       value,
  //     { mode: "cors" }
  //   )
  //     .then((res) => res.json())
  //     .then((response) => {
  //       const listObj = response;
  //       console.log(listObj);
  //       setListOfCities(listObj);
  //     });
  // }, [value]);

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
