import { Country } from "../types"

type SingleCountry = {
  singleCountry: Country;
  setSingleCountry: React.Dispatch<React.SetStateAction<Country | null>>
}

export default function SingleCountry({ singleCountry, setSingleCountry }: SingleCountry) {
  return (
    <>
      <button className="back-btn" onClick={() => setSingleCountry(null)}>
        <span>←</span> Back
      </button>
      <main className="single-country">
        <img src={singleCountry.flags.svg} alt={singleCountry.flags.alt} />
        <div className="single-country-details">
          <h2>{singleCountry.name.common}</h2>
          <div className="single-country-grid">
            <ul>
              <li>
                <span>Native Name:</span> {" "}
                {Object.values(singleCountry.name.nativeName)[0].common}
              </li>
              <li>
                <span>Population:</span> {" "}
                {singleCountry.population.toLocaleString()}
              </li>
              <li>
                <span>Reegion:</span> {" "}
                {singleCountry.region}
              </li>
              <li>
                <span>Sub Region:</span> {" "}
                {singleCountry.subregion}
              </li>
              <li>
                <span>Capital:</span> {" "}
                {singleCountry.capital.join(", ")}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> {" "}
                {Object.values(singleCountry.tld).join(", ")}
              </li>
              <li>
                <span>Currencies:</span> {" "}
                {Object.keys(singleCountry.currencies).join(", ")}
              </li>
              <li>
                <span>Languages:</span> {" "}
                {Object.values(singleCountry.languages).join(", ")}
              </li>
            </ul>

            <ul className="borders">
              <span>Border Countries:</span>
              {singleCountry.borders?.map(country => <li key={country}>{country}</li>)}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}