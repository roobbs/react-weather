import search from "../assets/buscar.png";
import sun from "../assets/sun.png";

export default function Header({ city }) {
  return (
    <div className="header">
      <img src={sun} alt="" className="logoImg" />
      <div>{city}</div>
      <div className="input">
        <img src={search} alt="" className="searchImg" />
        <input type="text" placeholder="Search" />
      </div>
      {/* </input>s */}
    </div>
  );
}
