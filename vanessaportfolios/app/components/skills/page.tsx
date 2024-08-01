import AgileSkills from "../agileSkills/page";
import LanguageSkills from "../languageSkills/page";
import Navbar from "../navbar/page";
import SoftSkills from "../softSkills/page";
import TechSkills from "../techSkills/page";

export default function Skills() {

    return(
        <div>
            <Navbar/>
            <LanguageSkills/>
            <TechSkills/>
            <AgileSkills/>
            <SoftSkills/>
        </div>
    );
}