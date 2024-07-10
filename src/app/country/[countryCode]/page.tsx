'use client'
import CountryData from "@/data/data.json"
import Image from "next/image";
import Link from "next/link";
import { BorderContainer, CountryPageContainer, CountryPageContent, ImageContainer, InfosContainer } from "./styles";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryPage = ({params}: {params: {countryCode: string}}) => {
  const countries = CountryData;
  const selectedCountry = countries.find(country => country.numericCode === params.countryCode)
  const borderCountriesNames = selectedCountry?.borders?.map(border => countries.find(country => country.alpha3Code === border))
  const languages = selectedCountry?.languages.map(language => language.name)
  const currencies = selectedCountry?.currencies?.map(currency => currency.name)

  return(
    <CountryPageContainer>
      {selectedCountry &&
      <>
        <Link href={"/"}><FaArrowLeftLong /> Back</Link>
        <CountryPageContent>
          <ImageContainer>
            <Image src={selectedCountry?.flag} alt={selectedCountry?.name} width={900} height={600} />
          </ImageContainer>
          <InfosContainer>
            <h1>{selectedCountry.name}</h1>
            <div className="containerInfos">
              <div>
                <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
                <p><span>Population: </span>{selectedCountry.population}</p>
                <p><span>Region: </span>{selectedCountry.region}</p>
                <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
                <p><span>Capital: </span>{selectedCountry.capital}</p>
              </div>

              <div>
                <p><span>Top Level Domain: </span>{selectedCountry.topLevelDomain}</p>
                <p><span>Currencies: </span>{currencies?.join(', ')}</p>
                <p><span>Languages: </span>{languages?.join(', ')}</p>  
              </div>
            </div>
            {borderCountriesNames && 
              <BorderContainer>
                <p>Border Countries:</p>
                <div className="box">
                  {borderCountriesNames?.map(country => <div key={country?.numericCode} className="borderItem">{country?.name}</div>)}
                </div>
              </BorderContainer>
            }
            
          </InfosContainer>
        </CountryPageContent>
      </>
      }
    </CountryPageContainer>
  )
}

export default CountryPage;