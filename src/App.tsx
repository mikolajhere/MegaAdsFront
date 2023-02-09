import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Map } from "./components/Map/Map";
import { SearchContext } from "./context/search.context";

export function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Map />
      </SearchContext.Provider>
    </div>
  );
}
