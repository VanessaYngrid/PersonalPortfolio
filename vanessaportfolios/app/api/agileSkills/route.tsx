import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    //Define the TypeScript type for contact info
    type AgileSkills = {
        agile: String[],
        certification: String[],
    };

    const agileObject: AgileSkills = {
        agile: ["Scrum", "Design Thinking", "Lean", "UML diagrams", "Project Management", "OKR"],
        certification: ["Professional Scrum Master Certification PSM1", "OKRCP OKR Certified Professional"]
    };

    //Return the JSON response
    return NextResponse.json(agileObject, {status:200});

}