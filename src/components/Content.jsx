import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export default function Content() {
  const [search, setSearch] = useState("Inicial");
  const [location, setLocation] = useState();
  const [weatherObj, setWeatherObj] = useState();
  console.log(weatherObj);

  useEffect(() => {
    if (search === "Inicial") return;
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=" +
        search,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((response) => {
        const locat = response;
        console.log(locat);
        setLocation(locat);
        // setWeatherObj(response);
        // setLocation(response.location);
        // console.log("location");
        // console.log(location);
      });
  }, [search]);

  function handleSearch(loc) {
    setSearch(loc);
  }
  return (
    <div className="main">
      <Header city={search} handleChange={handleSearch} />
      <div className="content">
        {location && <SideBar location={location.location.name} />}
      </div>
    </div>
  );
}
