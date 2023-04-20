export type Country = {
  name: { common: string; offical: string; nativeName: { [key: string]: string }[] }
  population: number
  region: string
  subregion: string
  capital: string[]
  flags: { png: string; svg: string; alt: string }
  tld: string[]
  currencies: { [key: string]: string }
  languages: { [key: string]: string }
  borders: string[]
}