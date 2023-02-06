import { TestInterface } from "types";
import { Header } from "./components/layout/Header";
import { Map } from "./components/Map/Map";

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Map />
    </div>
  );
}
