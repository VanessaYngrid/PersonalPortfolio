import Navbar from "../navbar/page";

export default function ApiDocumentation() {
    return (
        <div className=" bg-[#240046] mx-auto max-w-full overflow-hidden">
            <Navbar/>
            <h1 className="text-3xl font-bold py-8 text-center bg-[#5E548E] text-white">API Documentation</h1>

        <section className="mb-6 pt-10 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Contact Info API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/contactinfo" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/contactinfo</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves contact information including phone number, email, and address.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm ">
                {`{
                    "contact_id": "c001",
                    "phoneNumber": "(438) 466-0689",
                    "email": "vanessa.yngrid96@gmail.com",
                    "address": "821 Sainte Croix Ave"
                }`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Education API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/education" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/education</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves educational background including programs, universities, and periods.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
                {`[
                    {
                    "education_id": "e001",
                    "program": "AEC Software Development: Desktop, Mobile and Web Application",
                    "university": "Vanier College",
                    "period": "January 2023 - December 2024 (Expected)",
                    "place": "Montreal, Canada",
                    "image": "/images/vaniercollege_image.jpg"
                    },
                    {
                    "education_id": "e002",
                    "program": "Bachelor of Industrial Engineering",
                    "university": "Mackenzie Presbyterian University",
                    "period": "January 2015 - July 2020",
                    "place": "São Paulo, Brazil",
                    "image": "/images/mackenzie_image.jpg"
                    }
                ]`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Experience API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/experience" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/experience</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves job experience details including company, department, position, and responsibilities.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`[
                {
                "company": "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
                "department": "Vehicle Department",
                "position": "Process Engineer",
                "dateRange": "Sep 2021 - Oct 2022",
                "responsibilities": {
                "responsibilities1": "Implemented the Scrum framework as the working model.",
                "responsibilities2": "Applied Lean methodology and quality measures to enhance processes and resources.",
                "responsibilities3": "Taught analysts process mapping and created end-to-end process flows."
                }
            },
            {
                "company": "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
                "department": "Accounting Operations Transformation Management",
                "position": "Junior Operational Financial Analyst",
                "dateRange": "Jan 2021 - Sep 2021",
                "responsibilities": {
                "responsibilities1": "Represented the department in quality and process improvement initiatives.",
                "responsibilities2": "Facilitated retrospective meetings between management teams.",
                "responsibilities3": "Collaborated with the project and processes team in mapping and establishing indicators for coordination processes."
                }
            },
            {
                "company": "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
                "department": "Insurance and Pension Accounting Processing Management",
                "position": "Junior Operational Financial Analyst",
                "dateRange": "Apr 2020 - Jan 2021",
                "responsibilities": {
                "responsibilities1": "Implemented Lean methodology to improve process flow.",
                "responsibilities2": "Mapped end-to-end process flows to identify pain points and improve operations.",
                "responsibilities3": "Specified tools for automating processes and documented procedure manuals."
                }
            },
            {
                "company": "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
                "department": "Credit Card and Insurance Accounting Processing Management",
                "position": "Intern",
                "dateRange": "Aug 2018 - Apr 2020",
                "responsibilities": {
                "responsibilities1": "End-to-end process mapping to identify gaps, process pain points, improvement opportunities and action plans.",
                "responsibilities2": "Development of materials for monthly management meetings.",
                "responsibilities3": "Assistance in the analytical reconciliation of credit card and Insurance balance sheet accounts."
                }
            }
            ]`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Weather API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span> External API</p>
            <p className="text-white"><span className="font-bold text-white">Link:</span> https://api.openweathermap.org/data/3.0/onecall</p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves weather data for Montreal.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`{
                "time": "2024-07-23T15:00:00Z",
                "temperature": 22,
                "description": "Clear sky",
                "feelLike": 21,
                "pop": 0,
                "wind": 5
            }`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Projects API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span> Internal API</p>
            <p className="text-white"><span className="font-bold text-white">Link:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/projects" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/projects</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves information about my projects.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`[
            {
                "project_id": "p001",
                "title": "Massage Therapy Booking Web Application",
                "duration": "June 2024 - Present",
                "description": {
                "description1": "Developed a comprehensive web application for massage therapy booking services with two team members, using React.js, TypeScript, and Tailwind CSS.",
                "description2": "Implemented server-side logic using Next.js, ensuring seamless performance and managing a MongoDB database for user, services data and appointments.",
                "description3": "Designed the entire prototype in Figma, and integrated Google Maps API for location services and Google Login API for secure authentication, allowing users to book, check, delete appointments, and make payments online."
                },
                "technologies": ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "MongoDB", "Figma", "Google Maps API", "Google Login API"],
                "image": "/images/massage_therapy_booking_web_application.png"
            },
            {
                "project_id": "p002",
                "title": "Natural Beauty Store Mobile Application",
                "duration": "May 2024 - Present",
                "description": {
                "description1": "Developed a beauty store mobile application using Java in Android Studio, implementing the Model-View-Controller (MVC) architecture and Android SDK frameworks.",
                "description2": "Implemented key functionalities including login, registration, product browsing, and user account management with XML layouts and Java code for UI elements.",
                "description3": "Conducted manual testing on multiple devices and planned future enhancements including fragment implementation and UI/UX refinements."
                },
                "technologies": ["Java", "Android Studio", "MVC", "Android SDK", "XML"],
                "image": "/images/natural_beauty_store_mobile_application.png"
            },
            {
                "project_id": "p003",
                "title": "Como Se Llama ECommerce Clothing Store",
                "duration": "Sep 2023 - Dec 2023",
                "description": {
                "description1": "Developed a clothing store web application using Visual Studio Code, HTML, CSS, JavaScript, Bootstrap, and JQuery collaboratively with a study colleague.",
                "description2": "Orchestrated the design framework to ensure a user-friendly, responsive interface, including a real-time search bar with product data and refined filters, and contributed to developing the login system."
                },
                "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "Visual Studio Code"],
                "image": "/images/como_se_llama_ecommerce_clothing_store.png"
            },
            {
                "project_id": "p004",
                "title": "E Figuro Employee Management System",
                "duration": "Sep 2023 - Dec 2023",
                "description": {
                "description1": "Developed as a team a desktop application HR system using Visual Studio (C#, ASP.NET, WPF) to facilitate small to medium-sized businesses to manage their employees.",
                "description2": "Ensured all project functionalities were implemented with respect to MVC (Model-View-Controller) design pattern."
                },
                "technologies": ["C#", "Visual Studio", "MVC", "API"],
                "image": "/images/e_figuro_employee_management_system.png"
                }
            ]`}
            </pre>
        </section>


        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Tech Skills API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/techSkills" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/techSkills</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves list of programming languages and tools.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`{
                "programming": ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS", "Java", "MongoDB", "SQL Server", "Git", "C#"],
                "tools": ["Visual Studio Code", "Jira", "Miro", "Figma", "Bizagi", "Draw.io", "Trello", "Android Studio", "Eclipse", "Excel", "PowerPoint", "Word"]
            }`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Languages Skills API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/languageSkills" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/languageSkills</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves list of languages.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`[{
                language_id: "l001",
                language: "English",
                level: "Advanced"
            },
            {
                language_id: "l002",
                language: "French",
                level: "Intermediate"
            },
            {
                language_id: "l003",
                language: "Spanish",
                level: "Native"
            },
            {
                language_id: "l004",
                language: "Portuguese",
                level: "Proficient"
            }]`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Agile Skills API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/agileSkills" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/agileSkills</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves list of agile methodologies and certifications.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`{
                "agile": ["Scrum", "Design Thinking", "Lean", "UML diagrams", "Project Management", "OKR"],
                "certification": ["Professional Scrum Master Certification PSM1", "OKRCP OKR Certified Professional"]
            }`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Soft Skills API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span><a href="https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/softSkills" className="text-white underline" target="_blank" rel="noopener noreferrer"> https://transactional-web-assignment-vanessa-yngrid.vercel.app/api/softSkills</a></p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves list of softskills.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`{
                "softSkills": ["Adaptability", "Communication", "TeamWork", "Problem Solving", "Creativity", "Critical Thinking"]
            }`}
            </pre>
        </section>

        <section className="mb-6 px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#C77DFF] text-center">Countries Info API</h2>
            <p className="text-white"><span className="font-bold text-white">Endpoint:</span> External API</p>
            <p className="text-white"><span className="font-bold text-white">Link:</span> https://freetestapi.com/api/v1/countries</p>
            <p className="text-white"><span className="font-bold text-white">Method:</span> GET</p>
            <p className="text-white"><span className="font-bold text-white">Description:</span> Retrieves information about specific countries.</p>
            <p className="text-white"><span className="font-bold text-white">Status Code:</span> 200 OK</p>
            <p className="text-white"><span className="font-bold text-white">Response:</span></p>
            <pre className="bg-[#3b1a5a] bg-opacity-50 text-white p-4 rounded overflow-x-auto text-sm">
            {`[
                {
                    "id": 1,
                    "name": "Peru",
                    "population": 32971854,
                    "land_area": 1285216,
                    "density": "25/km²",
                    "capital": "Lima",
                    "currency": "Sol"
                },
                {
                    "id": 2,
                    "name": "Brazil",
                    "population": 212559417,
                    "land_area": 8515767,
                    "density": "25/km²",
                    "capital": "Brasilia",
                    "currency": "Real"
                },
                {
                    "id": 3,
                    "name": "Canada",
                    "population": 37742154,
                    "land_area": 9984670,
                    "density": "4/km²",
                    "capital": "Ottawa",
                    "currency": "Canadian Dollar"
                },
                {
                    "id": 4,
                    "name": "Colombia",
                    "population": 50882891,
                    "land_area": 1141748,
                    "density": "44/km²",
                    "capital": "Bogotá",
                    "currency": "Peso"
                },
                {
                    "id": 5,
                    "name": "Italy",
                    "population": 60244639,
                    "land_area": 301340,
                    "density": "200/km²",
                    "capital": "Rome",
                    "currency": "Euro"
                },
                {
                    "id": 6,
                    "name": "France",
                    "population": 65273511,
                    "land_area": 643801,
                    "density": "101/km²",
                    "capital": "Paris",
                    "currency": "Euro"
                },
                {
                    "id": 7,
                    "name": "Mexico",
                    "population": 128932753,
                    "land_area": 1964375,
                    "density": "66/km²",
                    "capital": "Mexico City",
                    "currency": "Peso"
                },
                {
                    "id": 8,
                    "name": "South Korea",
                    "population": 51269185,
                    "land_area": 100210,
                    "density": "512/km²",
                    "capital": "Seoul",
                    "currency": "Won"
                },
                {
                    "id": 9,
                    "name": "Greece",
                    "population": 10423054,
                    "land_area": 131957,
                    "density": "79/km²",
                    "capital": "Athens",
                    "currency": "Euro"
                },
                {
                    "id": 10,
                    "name": "Japan",
                    "population": 126476461,
                    "land_area": 377975,
                    "density": "334/km²",
                    "capital": "Tokyo",
                    "currency": "Yen"
                },
                {
                    "id": 11,
                    "name": "Germany",
                    "population": 83783942,
                    "land_area": 357114,
                    "density": "235/km²",
                    "capital": "Berlin",
                    "currency": "Euro"
                }
            ]`}
            </pre>
        </section>

    </div>
    );
}
