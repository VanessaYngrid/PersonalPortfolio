'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/page";

//Define type
type EducationInfo = {
    education_id: string,
    program: string,
    university: string,
    period: string,
    place: string,
    image: string;
}
/*
type EduClientProps = {
    data: EducationInfo[] | undefined;
};*/

export default function EducationInfoClient(){

    //Hold the education information array
    const [eduInfo, setEduInfo] = useState<EducationInfo[]>([]);
    //To indicate if the data has been loaded
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    //It will render the education card
    function renderCard() {
        return (
            <div className="grid grid-cols-1 gap-2 bg-[#240046] py-16 px-4 sm:px-8">
                 {/*This is to map over the eduInfo array and create a card for each entry */}
                {eduInfo.length > 0 && eduInfo.map((edu) => (
                    <div key={edu.education_id} className="bg-[#3b1a5a] bg-opacity-50 rounded-lg shadow-md flex flex-col md:flex-row mb-8">
                        {/*md:w-1/3*/}
                        <div className="md:w-2/4 mb-4 md:mb-0">
                            <Image className="w-full h-[250px] object-cover rounded-lg"
                            src={edu.image}
                            width={500}
                            height={500}
                            alt={edu.program}
                            />
                        </div>
                        {/*"md:w-2/3"*/}
                        {/* flex-col justify-center - para centralizar verticalmente definiendo que el texto esta en una columna*/}
                        <div className="md:w-2/4 flex flex-col justify-center px-6">
                            <h2 className="text-xl font-semibold mb-8 text-[#C77DFF]">{edu.program}</h2>
                            <p className="text-white mb-2"><span className="font-semibold">University:</span> {edu.university}</p>
                            <p className="text-white mb-2"><span className="font-semibold">Period:</span> {edu.period}</p>
                            <p className="text-white"><span className="font-semibold">Place:</span> {edu.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    //fetching the education data from my API when the component mounts
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/education`, { cache: "no-cache" })
            .then((res) => res.json()) //process and Parse the response as JSON
            .then((data) => {
            // `data` is the JSON-parsed response
            setDataIsLoaded(true); //if the data has been loaded
            setEduInfo(data); //Set the fetched data into the eduInfo state
        })
    }, []);

    //Rendering the component
    return (
        <>
        <div className="min-h-screen overflow-x-hidden">
            <Navbar/>
            <div className="font-bold text-3xl text-center py-8 text-white bg-[#5E548E]">Education</div>
                <div>
                    {/*Instead of another useEffect to avoid unnecessary rendering (myComponent useState)*/}
                    {dataIsLoaded && renderCard()}
                </div>
            </div>
        </>
    );
}

    /*
    useEffect(() => {
        if (data) {
            setDataIsLoaded(true);
            setEduInfo(data);
        } else {
            setDataIsLoaded(false);
        }      
    }, [data]);*/