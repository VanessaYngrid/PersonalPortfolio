'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import Navbar from "../../navbar/page";

type Projects = {
    project_id: string;
    title: string;
    duration: string;
    description: {
        description1: string;
        description2: string;
        description3?: string;
    };
    technologies: string[];
    image: string;
};

/*
type ExperienceClientProps = {
    data: Projects[] | undefined;
};*/


export default function ProjectsClient() {

    const [projectInfo, setProjectInfo] = useState<Projects[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    function transformProjectName(project: string) {
        return project.replace(/ /g, '_').toLowerCase();
    }

    function renderProjectCards() {
        return (
            projectInfo.length > 0 && projectInfo.map((project) => (
                <div className="w-full max-w-[700px] rounded overflow-hidden shadow-lg bg-[#3b1a5a] bg-opacity-40 mx-2 my-4 sm:mx-4" key={project.project_id}>
                    <Image
                        className='w-full h-[300px] sm:h-[500px] object-cover'
                        src={`/images/${transformProjectName(project.title)}.png`}
                        width={500}
                        height={500}
                        alt={project.title}
                    />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 py-4 text-center text-[#C77DFF]'>{project.title}</div>
                        <div className="text-xs mb-2">
                            <p className='text-white pb-2'>
                                - {project.description.description1}
                            </p>
                            <p className='text-white text-xs pb-2'>
                                - {project.description.description2}
                            </p>
                            {project.description.description3 && (
                                <p className='text-white text-xs pb-2'>
                                    - {project.description.description3}
                                </p>
                            )}
                        </div>
                        <div className="h-20 py-2">
                            <p className="font-bold my-2 text-white">Technologies:</p>
                            <p className="text-purple-200 text-xs">- {project.technologies.join(', ')}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-6">
                        <a
                            href="https://github.com/VanessaYngrid?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black hover:bg-[#2E2C2E] font-bold py-2 px-4 rounded cursor-pointer flex items-center justify-center"
                        >
                            <Image
                                src="/images/github.png"
                                alt="GitHub"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
            ))
        );
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
            setDataIsLoaded(true);
            setProjectInfo(data);
        })
    }, []);

    return (
        <div className="min-h-screen bg-[#240046] overflow-x-hidden">
            <Navbar />
            <div className="font-bold text-3xl text-center py-8 text-white bg-[#5E548E]">My Programming Projects</div>
            <div className="flex justify-center my-10 px-4 sm:px-6">
                <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {dataIsLoaded && renderProjectCards()}
                </div>
            </div>
            <div className="h-20 bg-[#240046]"></div>
        </div>
    );
}

// Effect to update the project info and loading state when `data` changes
    /*useEffect(() => {
        if (data) {
            setProjectInfo(data);
            setDataIsLoaded(true);
        } else {
            setDataIsLoaded(false);
        }
    }, [data]);*/


/* githubLink: string;
function transformProjectName(project: string) {
        return project.replace(/ /g, '_').toLowerCase();
    }
<div className="w-full max-w-[700px] rounded overflow-hidden shadow-lg bg-[#3b1a5a] bg-opacity-40" key={project.project_id}>
                    <Image
                        className='w-full h-[500px] object-cover'
                        src={`/images/${transformProjectName(project.title)}.png`}
                        width={500}
                        height={500}
                        alt={project.title}
                    />

                    */