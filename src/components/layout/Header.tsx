import { SyntheticEvent, useContext, useState } from "react";
import { SearchContext } from "../../context/search.context";
import { Btn } from "../common/Btn";
import "./Header.css";

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <a href="/">
          <strong>Mega </strong>Ogłoszenia
        </a>
      </h1>
      <Btn to="/add" text="Dodaj ogłoszenie" />
      <form className="search" onSubmit={setSearchFromLocalState}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Btn text="Szukaj" />
      </form>
    </header>
  );
};
