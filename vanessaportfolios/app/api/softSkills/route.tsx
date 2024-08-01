import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    //Define the TypeScript type for contact info
    type TechnologySkills = {
        softSkills: String[],
    };

    const TechnologyObject: TechnologySkills = {
        softSkills: ["Adaptability", "Communication", "TeamWork", "Problem Solving", "Creativity", "Critical Thinking"],
    };

    //Return the JSON response
    return NextResponse.json(TechnologyObject, {status:200});

}