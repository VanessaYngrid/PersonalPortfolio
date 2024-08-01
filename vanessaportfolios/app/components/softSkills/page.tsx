'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

type SoftSkills = {
    softSkills: string[],
};

const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')     // Replaces spaces with _
        .toLowerCase();
}

export default function SoftSkills() {
    const [softSkills, setSoftSkills] = useState<SoftSkills>();
    const [myComponent, setMyComponent] = useState(<></>);

    // Fetch the data from the API and sets the softSkills state.
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/softSkills`);
                if (response.ok) {
                    // Define that the data is type SoftSkills
                    const data: SoftSkills = await response.json();
                    setSoftSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // It depends on softSkills, and it will update myComponent when softSkills changes
    useEffect(() => {
        if (softSkills) {
            // skills: string[] -> defines that the parameter expects an Array of Strings
            const renderSkillCards = (skills: string[]) => {
                return (
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-2 sm:grid-cols-3md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {skills.map((skill) => (
                                <div className="w-full max-w-[160px] rounded overflow-hidden shadow-lg bg-white" key={skill}>
                                    <div className='bg-[#e6cee6] px-4 py-2 w-full h-14 flex items-center justify-center'>
                                        <h2 className='text-sm font-bold'>{skill}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            const component = (
                <div className="max-h-screen max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-8 text-[#C77DFF]">Soft Skills</h1>
                    {renderSkillCards(softSkills.softSkills)}
                </div>
            );

            setMyComponent(component);
        }
    }, [softSkills]);

    return (
        <div className="bg-[#240046] overflow-x-hidden">
            {myComponent}
        </div>
    );
}


/*<div className='bg-white text-center py-2 mb-2 w-full h-16 flex items-center justify-center'>
    <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/images/${category}/${transformSkillName(skill)}.png`}
        alt={`${skill} logo`}
        width={50}
        height={50}
        layout='intrinsic'
    />
</div>
*/