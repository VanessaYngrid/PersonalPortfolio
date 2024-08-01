import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    //Define the TypeScript type for contact info
    type TechnologySkills = {
        programming: String[],
        tools: String[],
    };

    const TechnologyObject: TechnologySkills = {
        programming: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS", "Java Android","Next js", "Java", "MongoDb", "SQL Server", "Git", "C#"],
        tools: ["Visual Studio Code", "Jira", "Miro", "Figma", "Bizagi", "Draw io", "Trello", "Android Studio","Eclipse", "Excel", "PowerPoint", "Word"]
    };

    //Return the JSON response
    return NextResponse.json(TechnologyObject, {status:200});

}