import "../styles/Header.css";
import search from "../assets/buscar.png";
import sun from "../assets/sun.png";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import CityCard from "./CityCard";

export default function Header({ city, region, handleChange }) {
  const [value, setValue] = useState("");
  const [listOfCities, setListOfCities] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=fdd09a79a4d5440a8ad165337231011&q=${value}`,
        { mode: "cors" }
      );
      const result = await response.json();
      setListOfCities(result);
    };

    if (value !== "" && value.length > 0) {
      fetchCities();
    }
  }, [value]);

  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setTimeout(() => setIsFocused(false), 100);
  }

  function handlePress(event) {
    if (event.key === "Enter") {
      handleChange(value);
    }
  }

  function handleCardClick(value) {
    handleChange(value);
    setValue("");
    setListOfCities("");
  }

  function handleValue(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div className="header">
      <img src={sun} alt="" className="logoImg" />

      <div
        className="currentCity"
        style={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <FaLocationArrow className="locationImg" />
        <div className="currentCityName">
          {city}, {region}
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="input">
          <img src={search} alt="" className="searchImg" />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={handleValue}
            onKeyDown={handlePress}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {listOfCities && isFocused && (
            <div className="cityListContainer">
              {listOfCities.map((city, index) => (
                <CityCard
                  key={index}
                  city={city.name}
                  region={city.region}
                  country={city.country}
                  onClick={() => handleCardClick(city.name)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
