'use client';

import { useState , useEffect} from "react";
import Image from 'next/image';
import Navbar from "../../navbar/page";

interface Countries {
    id: number;
    name: string;
    population: number;
    land_area: number;
    density: string;
    capital: string;
    currency: string;
}

/*
type CountriesProps = {
    data : Countries[] | undefined;
};*/

export default function CountriesInfoClient() {

    const [countriesInfo, setCountriesInfo] = useState<Countries[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    //const [myComponent, setMyComponent] = useState(renderCard);
    
    function renderCard() {
        return (
            <>
            <div className="py-12">
                <div className = "text-3xl font-bold mb-8 text-center text-[#C77DFF]">Countries I have lived in</div>
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-1 sm:grid-cols-4 gap-8">
                            {countriesInfo.map((e, ekey) => {
                                if(e.name==="Peru" || e.name==="Brazil" || e.name==="Canada" || e.name==="Colombia")
                                {
                                return (
                                    <div className="w-full max-w-[300px] rounded overflow-hidden shadow-lg bg-white"key={ekey}>
                                        <div className='bg-[#240046] bg-opacity-95 text-center pb-2 pt-4 w-full h-36 flex items-center justify-center'> 
                                            <Image
                                                src={`/images/flags/${e.name.toLowerCase().replace(' ', '_')}.png`}
                                                alt={`flag of ${e.name}`}
                                                width={200}
                                                height={200}
                                                layout='intrinsic'
                                            />
                                        </div>
                                        <div className='bg-[#240046] bg-opacity-95 w-full h-56 pt-2 pb-8 px-14 text-center text-white'>
                                            <p><span className="font-semibold">Country: </span>{e.name}</p>
                                            <p><span className="font-semibold">Capital: </span>{e.capital}</p>
                                            <p><span className="font-semibold">Population: </span>{e.population}</p>
                                            <p><span className="font-semibold">Land Area: </span>{e.land_area}</p>
                                            <p><span className="font-semibold">Density: </span>{e.density}</p>
                                            <p><span className="font-semibold">Currency: </span>{e.currency}</p>
                                    </div>
                                </div>
                                )}   
                            })}
                        </div>
                    </div>
            </div>

            <div className="py-12">
            <div className = "text-3xl font-bold mb-8 text-center text-[#C77DFF]">Countries I want to travel to</div>
                <div className="flex justify-center">
                    <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-screen-lg px-4 gap-8">
                        {countriesInfo.map((e, ekey) => {
                            if(e.name==="Italy" || e.name==="France" || e.name==="Mexico" || e.name==="South Korea" || e.name==="Greece" || e.name==="Japan" || e.name==="Germany")
                            {
                            return (
                                <div className="w-full max-w-[300px] rounded overflow-hidden shadow-lg bg-white"key={ekey}>
                                    <div className='bg-[#240046] bg-opacity-95 text-center pb-2 pt-4 w-full h-36 flex items-center justify-center'>
                                        <Image
                                            src={`/images/flags/${e.name.toLowerCase().replace(' ', '_')}.png`}
                                            alt={`flag of ${e.name}`}
                                            width={200}
                                            height={200}
                                            layout='intrinsic'
                                        />
                                    </div>
                                    <div className='bg-[#240046] bg-opacity-95 w-full h-52 py-5 px-14 text-center text-white'>
                                        <p><span className="font-semibold">Country: </span>{e.name}</p>
                                        <p><span className="font-semibold">Capital: </span>{e.capital}</p>
                                        <p><span className="font-semibold">Population: </span>{e.population}</p>
                                        <p><span className="font-semibold">Land Area: </span>{e.land_area}</p>
                                        <p><span className="font-semibold">Density: </span>{e.density}</p>
                                        <p><span className="font-semibold">Currency: </span>{e.currency}</p>
                                </div>
                            </div>
                            )}   
                        })}
                    </div>
                </div>
            </div>
            </>
        );
    }

    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/countries", { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
            setDataIsLoaded(true);
            setCountriesInfo(data);
        })
    }, []);


    return (
        <div className="bg-[#240046] overflow-x-hidden">
            <Navbar/>
            {dataIsLoaded && renderCard()}
        </div>
    );

}

/*
    useEffect(() => {
        if (data) {
            setDataIsLoaded(true);
            setCountriesInfo(data);
        } else {
            setDataIsLoaded(false);
        }      
    }, [data]);
*/