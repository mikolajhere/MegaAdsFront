import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddForm } from "./components/AddForm/AddForm";
import { Header } from "./components/layout/Header";
import { Map } from "./components/Map/Map";
import { SearchContext } from "./context/search.context";

export function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/add" element={<AddForm />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}
