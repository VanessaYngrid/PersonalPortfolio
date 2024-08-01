'use client';

import { useState, useEffect } from "react";
import Navbar from "../../navbar/page";

type JobExperience = {
    company: string;
    department: string;
    position: string;
    dateRange: string;
    responsibilities: {
        responsibilities1: string;
        responsibilities2: string;
        responsibilities3?: string;
    };
};

/*
type ExperienceClientProps = {
    data: JobExperience[] | undefined;
};*/

export default function ExperienceClient() {
    const [jobExperiences, setJobExperiences] = useState<JobExperience[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const handleCardClick = (company: string) => {
        const element = document.getElementById(company);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderExperienceCards = () => {
        return (
            <div className="flex flex-col items-center space-y-6 mt-16 px-4 md:px-8">
                {jobExperiences.map((experience, index) => (
                    <div
                        id={`experience-${index}`}
                        key={experience.position}
                        className="w-full max-w-[900px] p-6 bg-[#653196] rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:bg-[#61256d] cursor-pointer mx-2 sm:mx-4"
                        onClick={() => handleCardClick(`experience-${index}`)}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 pr-4">
                                <h2 className="text-xl font-bold mb-2 text-[#C77DFF]">{experience.company}</h2>
                                <p className="text-white">
                                    <span className="font-semibold">Department:</span> {experience.department}
                                </p>
                                <p className="text-white">
                                    <span className="font-semibold">Position:</span> {experience.position}
                                </p>
                                <p className="text-white">
                                    <span className="font-semibold">Date Range:</span> {experience.dateRange}
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 pl-4">
                                <h3 className="font-bold mb-2 text-[#C77DFF]">Responsibilities:</h3>
                                <ul className="list-disc list-inside text-white">
                                    <li>{experience.responsibilities.responsibilities1}</li>
                                    <li>{experience.responsibilities.responsibilities2}</li>
                                    {experience.responsibilities.responsibilities3 && (
                                        <li>{experience.responsibilities.responsibilities3}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    /*
    useEffect(() => {
        if (data) {
            setJobExperiences(data);
            setDataIsLoaded(true);
        } else {
            setDataIsLoaded(false);
        }
    }, [data]);*/

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experience`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
            setDataIsLoaded(true);
            setJobExperiences(data);
        })
    }, []);

    return (
        <div className="bg-[#240046] min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="mx-auto pb-8">
                <h1 className="text-3xl font-bold mb-4 py-8 text-center text-white bg-[#5E548E]">Work Experience</h1>
                {dataIsLoaded && renderExperienceCards()}
            </div>
        </div>
    );
}