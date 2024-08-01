import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    //Define the TypeScript type for contact info
    type Projects = {
        project_id: string,
        title: string,
        duration: string,
        description: {
            description1: string,
            description2: string,
            description3?: string,},
        technologies: string[],
        image: string,
    }

    //Create an Projects object
    const projectsObject: Projects[] = [
        {
            project_id: "p001",
            title: "Massage Therapy Booking Web Application",
            duration: "June 2024 - Present",
            description: {
                description1: "Developed a comprehensive web application for massage therapy booking services with two team members, using React.js, TypeScript, and Tailwind CSS.",
                description2: "Implemented server-side logic using Next.js, ensuring seamless performance and managing a MongoDB database for user, services data and appointments.",
                description3: "Designed the entire prototype in Figma, and integrated Google Maps API for location services and Google Login API for secure authentication, allowing users to book, check, delete appointments, and make payments online."
            },
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "MongoDB", "Figma", "Google Maps API", "Google Login API"],
            image: "/images/massage_therapy_booking_web_application.png"
        },
        {
            project_id: "p002",
            title: "Natural Beauty Store Mobile Application",
            duration: "May 2024 - Present",
            description: {
                description1: "Developed a beauty store mobile application using Java in Android Studio, implementing the Model-View-Controller (MVC) architecture and Android SDK frameworks.",
                description2: "Implemented key functionalities including login, registration, product browsing, and user account management with XML layouts and Java code for UI elements.",
                description3: "Conducted manual testing on multiple devices and planned future enhancements including fragment implementation and UI/UX refinements."
            },
            technologies: ["Java", "Android Studio", "MVC", "Android SDK", "XML"],
            image: "/images/natural_beauty_store_mobile_application.png"
        },
        {
            project_id: "p003",
            title: "Como Se Llama ECommerce Clothing Store",
            duration: "Sep 2023 - Dec 2023",
            description: {
                description1: "Developed a clothing store web application using Visual Studio Code, HTML, CSS, JavaScript, Bootstrap, and JQuery collaboratively with a study colleague.",
                description2: "Orchestrated the design framework to ensure a user-friendly, responsive interface, including a real-time search bar with product data and refined filters, and contributed to developing the login system."
            },
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "Visual Studio Code"],
            image: "/images/como_se_llama_ecommerce_clothing_store.png"
        },
        {
            project_id: "p004",
            title: "E Figuro Employee Management System",
            duration: "Sep 2023 - Dec 2023",
            description: {
                description1: "Developed as a team a desktop application HR system using Visual Studio (C#, ASP.NET, WPF) to facilitate small to medium-sized businesses to manage their employees.",
                description2: "Ensured all project functionalities were implemented with respect to MVC (Model-View-Controller) design pattern."
            },
            technologies: ["C#", "Visual Studio", "MVC", "API"],
            image: "/images/e_figuro_employee_management_system.png"
        }
    ];

    //Return the JSON response
    return NextResponse.json(projectsObject, {status:200});

}