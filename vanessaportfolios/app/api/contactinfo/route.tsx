import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    //Define the TypeScript type for contact info
    type ContactInfo = {
        contact_id: string,
        phoneNumber: string,
        email: string,
        address: string,
    }

    //Create an ContacInfo object
    const contactInfoObject: ContactInfo = {
        contact_id: "c001",
        phoneNumber: "(438) 466-0689",
        email: "vanessa.yngrid96@gmail.com",
        address: "821 Sainte Croix Ave"
    }

    //Return the JSON response
    return NextResponse.json(contactInfoObject, {status:200});

}