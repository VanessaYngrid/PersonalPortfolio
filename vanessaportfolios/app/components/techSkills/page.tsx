'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

//type for the technology skills data
type TechnologySkills = {
    programming: string[],
    tools: string[],
};


const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')     // Reemplazae espacios por _
        .replace(/#/g, '%23')     // Codifica # como %23 para URLs
        .toLowerCase();
}

export default function TechSkills() {
    //State to hold the fetched technology skills data
    const [techSkills, setTechSkills] = useState<TechnologySkills>();
    //hold the component that will be rendered
    const [myComponent, setMyComponent] = useState(<></>);

    //Fetch the data from the API and sets the techSkills state.
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/techSkills`);
                if (response.ok) {
                    //Parse the JSON data and define that the data is type TechnologySkills
                    const data: TechnologySkills = await response.json();
                    setTechSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();  //Call the fetchData function
    }, []);//Empty dependency array --> runs only once on mount

    //it depends on techSkills, and it will update myComponent when techSkills changes
    useEffect(() => {
        if (techSkills) {
            //skills: string[] -> define that the parameter expect an Array of Strings
            //Function to render skill cards for a given category
            const renderSkillCards = (skills: string[], category: string) => {
                return (
                    <div className="flex justify-center">
                        <div className="justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                            {skills.map((skill) => (
                                <div className="bg-[#3b1a5a] w-full max-w-[120px] rounded overflow-hidden shadow-lg" key={skill}>
                                    <div className='text-center py-2 mb-2 w-full h-16 flex items-center justify-center'>
                                        <Image
                                            src={`/images/${category}/${transformSkillName(skill)}.png`}
                                            alt={`${skill} logo`}
                                            width={50}
                                            height={50}
                                            layout='intrinsic'
                                        />
                                    </div>
                                    <div className='px-4 w-full h-10 flex items-center justify-center'>
                                        <h2 className='text-white text-sm font-bold'>{skill}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            //Create the component with skill cards
            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-8 text-[#C77DFF]">Technology Skills</h1>
                    <h2 className="text-xl font-bold mb-8 text-[#C77DFF]">Programming</h2>
                    {renderSkillCards(techSkills.programming, 'programming')}
                    <h2 className="text-xl font-bold my-8 text-[#C77DFF]">Tools</h2>
                    {renderSkillCards(techSkills.tools, 'tools')}
                </div>
            );

            //Update the myComponent state with the new component
            setMyComponent(component);
        }
    }, [techSkills]); //Depend on techSkills, so this runs when techSkills changes

    //Render the component
    return (
        <div className="bg-[#240046] overflow-x-hidden">
            {myComponent}
        </div>
    );
}