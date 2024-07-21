import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Created by{" "}
        <a
          href="https://www.github.com/roobbs"
          title="Roobbs Github"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Roobbs
        </a>
      </p>{" "}
      <p>
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
          target="_blank"
          rel="noreferrer"
        >
          WeatherAPI.com
        </a>
      </p>
    </footer>
  );
}
