import { useState, useEffect, useMemo } from 'react'
import './assets/css/App.css'
import Header from "./components/Header"
import SearchForm from "./components/SearchForm";
import { Country } from './types';
import Countries from './components/Countries';
import SingleCountry from './components/SingleCountry';

function App() {
  const [countries, setCountries] = useState<Country[]>(() => []);
  const [searchCountry, setSearchCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [singleCountry, setSingleCountry] = useState<Country | null>(null);

  // Getting countries data for the first time
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (res.ok) {
          const data: Country[] = await res.json();
          if (!ignore) setCountries(data);
        }
      } catch (err) {
        console.error(err);
      }
    })();

    return () => { ignore = true };
  }, []);

  const filteredCountries = useMemo(() => {
    const filter = filterByRegion.toLowerCase();
    if (filter === "" && searchCountry === "") return countries;

    if (filter === "" && searchCountry !== "") {
      return countries.filter(country =>
        country.name.common.toLowerCase().includes(searchCountry.toLocaleLowerCase())
      )
    }

    return countries.filter(country => {
      if (filter === country.region.toLowerCase()) {
        return country.name.common.toLowerCase().includes(searchCountry.toLocaleLowerCase())
      }
    });
  }, [countries, searchCountry, filterByRegion]);

  return (
    <>
      <Header />
      {singleCountry !== null ? (
        <SingleCountry singleCountry={singleCountry} setSingleCountry={setSingleCountry} />
      ) : (
        <>
          <SearchForm
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
            setFilterByRegion={setFilterByRegion}
          />
          {countries.length > 0 ? (
            <Countries countries={filteredCountries} setSingleCountry={setSingleCountry} />
          ) : (
            <h2 className='searching'>Loading...</h2>
          )}
        </>
      )}
    </>
  )
}

export default App;