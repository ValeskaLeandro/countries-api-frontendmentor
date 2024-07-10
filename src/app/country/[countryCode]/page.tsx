'use client'
import CountryData from "@/data/data.json"
import Image from "next/image";
import Link from "next/link";

const CountryPage = ({params}: {params: {countryCode: string}}) => {
  const countries = CountryData;
  const selectedCountry = countries.find(country => country.numericCode === params.countryCode)

  return(
    <>
      {selectedCountry &&
      <>
        <Link href={"/"}>Back</Link>
        <Image src={selectedCountry?.flags.svg} alt={selectedCountry?.name} width={900} height={600}></Image>
      </>
      }
    </>
  )
}

export default CountryPage;