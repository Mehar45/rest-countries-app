import { Country } from '../types';

type Countries = {
  countries: Country[];
  setSingleCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

export default function Countries({ countries, setSingleCountry }: Countries) {
  const handelSingleCountry = (e: React.MouseEvent) => {
    const countryName = e.currentTarget.lastChild?.firstChild?.textContent!;

    for (const country of countries) {
      if (country.name.common === countryName) {
        setSingleCountry(country);
        break;
      }
    }
  }

  return (
    <div className="countries">
      {countries.map(country => (
        <article className="country" key={country.name.common} onClick={handelSingleCountry}>
          <img src={country.flags.svg} width={265} height={160} loading="lazy" alt={country.flags.alt} />
          <div className="country-desc">
            <h2>{country.name.common}</h2>
            <p><span>Population: </span>{country.population.toLocaleString()}</p>
            <p><span>Region: </span>{country.region}</p>
            <p><span>Capital: </span>{country.capital}</p>
          </div>
        </article>
      ))}
    </div>
  );
}