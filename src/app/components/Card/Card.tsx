import { Country } from "@/interfaces/interfaces";
import { InfoCard, MainCard } from "./styles";
import Image from "next/image";

interface ICard {
  country: Country
}
const Card = ({ country }: ICard) => {
  return(
    <MainCard>
      <Image src={country.flags.png} width={300} height={200} alt={`Flag ${country.name}`}/>
      <InfoCard>
        <h1>{country.name}</h1>
        <p><span>Population: </span> {country.population}</p>
        <p><span>Region: </span> {country.region}</p>
        <p><span>Capital: </span> {country.capital}</p>
      </InfoCard>
    </MainCard>
  )
}

export default Card;