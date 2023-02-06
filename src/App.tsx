import { TestInterface } from "types";
import "./App.css";

export function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>
          <strong>Mega </strong>Ogłoszenia{" "}
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text" />
          <button>Szukaj</button>
        </div>
      </header>
      <div className="map">...</div>
    </div>
  );
}
