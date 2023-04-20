import { useState } from "react";
import Select from "./Select";

type CountryName = {
  searchCountry: string;
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>;
  setFilterByRegion: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({ searchCountry, setSearchCountry, setFilterByRegion }: CountryName) {
  const [value, setValue] = useState<string>("Filter by Region");
  const options = [
    { label: "All", value: 1 },
    { label: "Africa", value: 2 },
    { label: "Americas", value: 3 },
    { label: "Asia", value: 4 },
    { label: "Europe", value: 5 },
    { label: "Oceania", value: 6 },
  ];

  function handelValue(val: string) {
    setValue(val);
    setFilterByRegion(val !== "All" ? val : "");
  }

  return (
    <div className="search-section" aria-label="Search">
      <div className="search-country">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
        <input
          type="text"
          value={searchCountry}
          placeholder='Search for a country...'
          onChange={e => setSearchCountry(e.target.value)}
        />
      </div>
      <div className="filter-countries">
        <Select options={options} value={value} onChange={handelValue} />
      </div>
    </div>
  );
}