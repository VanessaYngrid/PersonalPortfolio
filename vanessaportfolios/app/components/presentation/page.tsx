
export default function Presentation(){
    return(
    <div className=" bg-[#240046] overflow-x-hidden">
        <div className="text-center pt-10">
            <p className="text-[#DEDEDE] text-xs">Get to know me more</p>
            <h1 className="text-white text-3xl font-bold">About Me</h1>
        </div>   
        <div className="flex flex-col md:flex-row mx-6 md:mx-20 py-10">
            <div className="md:w-1/3 p-4 flex flex-col gap-6 justify-center text-center">
                <div className="bg-[#240046]  border border-white p-8 rounded-md text-[#E3D4E3]">
                    <p className="text-2xl font-bold">+4 years</p>
                    <p>Professional Experience</p>
                </div>
                <div className="bg-[#240046] border border-white p-8 rounded-md text-[#E3D4E3]">
                    <p className="text-2xl font-bold">5 projects</p>
                    <p>Software development</p>
                </div>
            </div>
            
            <div className="md:w-2/3 p-4 md:p-6">
                <p className="text-[#E3D4E3] mb-4">I am a software development student with strong proficiency in web technologies and mobile application development. My experience includes server-side development, database design, and a solid foundation in object-oriented programming.</p>
                <p className="text-[#E3D4E3] mb-4" >I have 4 years of experience in a financial institution as a financial analyst and process engineer, specializing in process improvement through agile methodologies, particularly the Scrum framework. My expertise includes mapping end-to-end process flows, creating metrics, applying agile practices, and utilizing project collaboration tools.</p>
                <p className="text-[#E3D4E3]" >My previous bachelors degree in industrial engineering and work experience were essential in developing my problem-solving and interpersonal skills through my analytical thinking, communication, and collaboration skills, as well as my ability to adapt to different challenges and become a versatile professional.</p>
            </div>
        </div>
    </div>
    );
}