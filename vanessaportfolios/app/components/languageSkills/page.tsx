'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

type LanguageSkill = {
    language_id: string,
    language: string,
    level: string,
};

const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')     // Replaces spaces with _
        .toLowerCase();
}

export default function LanguageSkills() {

    const [languageSkills, setLanguageSkills] = useState<LanguageSkill[]>();
    const [myComponent, setMyComponent] = useState(<></>);

    // Fetch the data from the API and set the languageSkills state.
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/languageSkills`);
                if (response.ok) {
                    // Define that the data is an array of LanguageSkill
                    const data: LanguageSkill[] = await response.json();
                    setLanguageSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // It depends on languageSkills, and it will update myComponent when languageSkills changes
    useEffect(() => {
        if (languageSkills) {
            // Define a component for rendering language skills
            const renderLanguageCards = (skills: LanguageSkill[]) => {
                return (
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {skills.map((skill) => (
                                <div className="w-full max-w-[500px] rounded overflow-hidden shadow-lg " key={skill.language_id}>
                                    <div className='bg-[#3b1a5a] text-center py-2  w-full h-18 flex items-center justify-center'>
                                    <Image
                                            src={`/images/languages/${transformSkillName(skill.language)}.png`}
                                            alt={`${skill.language} icon`}
                                            width={50}
                                            height={50}
                                            layout='intrinsic'
                                        />
                                    </div>
                                    <div className='bg-[#3b1a5a] px-6 w-full h-16 flex flex-col items-center justify-center'>
                                        <h2 className='text-l text-white font-bold'>{skill.language}</h2>
                                        <p className='text-sm text-white'>{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            const component = (
                <div className="max-w-full mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8 text-center text-[#C77DFF]">Language Skills</h1>
                    {renderLanguageCards(languageSkills)}
                </div>
            );

            setMyComponent(component);
        }
    }, [languageSkills]);

    return (
        <div className="bg-[#240046] overflow-x-hidden">
            {myComponent}
        </div>
    );
}