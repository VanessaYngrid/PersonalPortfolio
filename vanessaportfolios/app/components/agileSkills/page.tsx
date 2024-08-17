'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

type AgileSkills = {
    agile: string[],
    certification: string[],
};

const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')     // Reemplaza espacios por _
        .toLowerCase();
}

export default function AgileSkills() {

    const [agileSkills, setAgileSkills] = useState<AgileSkills>();
    const [myComponent, setMyComponent] = useState(<></>);

    // Fetch the data from the API and set the agileSkills state.
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agileSkills`);
                if (response.ok) {
                    const data: AgileSkills = await response.json();
                    setAgileSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Function to handle opening the PDF
    const openPDF = (certification: string) => {
        const pdfPath = `/pdfs/${transformSkillName(certification)}.pdf`;
        window.open(pdfPath, '_blank');
    };

    // It depends on agileSkills, and it will update myComponent when agileSkills changes
    useEffect(() => {
        if (agileSkills) {
            const renderSkillCards = (skills: string[], category: string) => {
                return (
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            {skills.map((skill) => (
                                <div className="w-full max-w-[120px] rounded overflow-hidden shadow-lg bg-[#3b1a5a]" key={skill}>
                                    <div className=' text-center py-2 mb-2 w-full h-16 flex items-center justify-center'>
                                        <Image
                                            src={`/images/${category}/${transformSkillName(skill)}.png`}
                                            alt={`${skill} logo`}
                                            width={50}
                                            height={50}
                                            layout='intrinsic'
                                        />
                                    </div>
                                    <div className='px-4 w-full h-14 flex items-center justify-center text-center'>
                                        <h2 className='text-sm  text-white font-bold'>{skill}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            const renderCertificationCards = (certifications: string[]) => {
                return (
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {certifications.map((certification) => (
                                <div className="w-full max-w-[600px] rounded overflow-hidden shadow-lg bg-[#3b1a5a]" key={certification}>
                                    <div className='text-center pt-4 pb-2 w-full h-48 flex items-center justify-center cursor-pointer'
                                    onClick={() => openPDF(certification)}>
                                        <Image
                                            src={`/images/certification/${transformSkillName(certification)}.png`}
                                            alt={`${certification} logo`}
                                            width={200}
                                            height={200}
                                            layout='intrinsic'
                                        />
                                    </div>
                                    <div className='px-4 py-4 w-full flex flex-col justify-center text-center'>
                                        <h2 className='text-white text-md font-bold'>{certification}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-8 text-[#C77DFF]">Agile Skills</h1>
                    <h2 className="text-xl font-bold mb-8 text-[#C77DFF]">Agile</h2>
                    {renderSkillCards(agileSkills.agile, 'agile')}
                    <h2 className="text-xl font-bold my-8 text-[#C77DFF]">Certifications</h2>
                    {renderCertificationCards(agileSkills.certification)}
                </div>
            );

            setMyComponent(component);
        }
    }, [agileSkills]);

    return (
        <div className="bg-[#240046] ">
            {myComponent}
        </div>
    );
}