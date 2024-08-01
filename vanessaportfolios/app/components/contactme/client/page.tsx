'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../navbar/page";
import { GoogleMapsEmbed } from '@next/third-parties/google';

type ContactInfo = {
    contact_id: string;
    phoneNumber: string;
    email: string;
    address: string;
};

/*
type ContactProps = {
    data?: ContactInfo | undefined;
};
*/

export default function ContactInfoClient() {

    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        contact_id: "",
        phoneNumber: "",
        email: "",
        address: "",
    });
    
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    function renderContactCard() {
        const contactIcons_array = [
            {
                image_src: "/icons/phonenumber_icon.png",
                alt: "phone number icon",
                title: "Phone Number:",
                contact_data: contactInfo.phoneNumber
            },
            {
                image_src: "/icons/email_icon.png",
                alt: "email icon",
                title: "Email:",
                contact_data: contactInfo.email
            },
            {
                image_src: "/icons/address_icon.png",
                alt: "address icon",
                title: "Address:",
                contact_data: contactInfo.address
            },
        ];

        function openLinkedIn() {
            window.open(
                "https://www.linkedin.com/in/vanessa-yngrid-chuquitaipe-vargas/",
                "_blank"
            );
        }

        return (
            <div className="flex flex-col md:flex-row items-center px-4 md:px-8 p-4 md:p-8 min-h-screen">
                <div className="w-full md:w-1/2 flex justify-center p-4">
                    <div className="p-6 md:p-12 border border-white rounded-lg w-full max-w-sm relative bg-[#240046]">
                            <h2 className="mb-6 md:mb-10 font-bold text-2xl md:text-3xl text-white text-center md:text-left">Contact Information</h2>
                            {contactIcons_array.map((e, ekey) => (
                                <div className="flex space-x-3 mb-4 md:mb-8" key={ekey}>
                                    <div className="w-6 h-6">
                                        <Image
                                            src={e.image_src}
                                            alt={e.alt}
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">
                                            {e.title}
                                        </div>
                                        <div className="text-white">
                                            {e.contact_data}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 md:mt-6 flex justify-center md:justify-start">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center space-x-2 border-none"
                                    onClick={openLinkedIn}
                                >
                                    <Image
                                        className="w-6 h-6"
                                        src="/icons/linkedin_icon.png"
                                        alt="LinkedIn icon"
                                        width={24}
                                        height={24}
                                    />
                                    <span>LinkedIn</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-center">
                        <div className="h-[300px] sm:h-[500px] w-full max-w-full overflow-hidden">
                            <GoogleMapsEmbed
                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
                                height={500}
                                width={500}
                                mode="place"
                                q={contactInfo?.address || ''}
                            /> 
                        </div>
                    </div>
                </div>
        );
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactinfo`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
            setDataIsLoaded(true);
            setContactInfo(data);
        })
    }, []);

    return (
        <div className="bg-[#240046] overflow-x-hidden min-h-screen">
            <Navbar />
            {dataIsLoaded && renderContactCard()}
        </div>
    );
}

/*
    useEffect(() => {
        if (dataIsLoaded) {
            setContactInfo(data);
            setDataIsLoaded(true);
        } else {
            setDataIsLoaded(false);
        }
    }, [data]);
*/

//const [myComponent, setMyComponent] = useState(renderContactCard);


/*  {myComponent}*/