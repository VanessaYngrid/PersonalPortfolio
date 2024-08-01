import Image from "next/image";

export default function BannerIntro() {
    return (
        <div style={{ backgroundImage: 'url(/images/bannerintro.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="flex flex-col md:flex-row justify-center items-center pt-10 px-4 md:px-10 overflow-x-hidden">
            <div className="flex flex-col items-start md:items-start md:mr-10 mb-6 md:mb-0">
            <p className="text-[#F1FAEE] text-2xl md:text-3xl font-bold">Hello, I am</p>
            <p className="text-[#C77DFF] text-3xl md:text-4xl font-bold">Vanessa Chuquitaipe Vargas</p>
            <p className="text-[#F1FAEE] text-l pt-4">Software Developer & Industrial Engineer</p>
    
            <div className="flex justify-start space-x-4 mt-4">
                <a
                href="https://www.linkedin.com/in/vanessa-yngrid-chuquitaipe-vargas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                >
                    <Image src="/images/linkedinicon.png" alt="LinkedIn" width={32} height={32} />
                </a>
                <a
                href="https://github.com/VanessaYngrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                >
                    <Image src="/images/githubicon.png" alt="GitHub" width={32} height={32} />
                </a>
                <a
                href="/pdfs/curriculum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                >
                    <Image src="/images/cvicon.png" alt="CV" width={32} height={32} />
                </a>
            </div>
        </div>

        <div className="flex justify-center items-center md:ml-10">
            <Image
                src="/images/avatar.png"
                alt="avatar intro"
                width={300}
                height={300}
                className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72"
            />
        </div>
    </div>
    );
}
