import React from "react";
import '../style.css'
import ProjectsForm from "../apiRequest/project";
import InfoForm from "../apiRequest/info";
import ProfileForm from "../apiRequest/profile";

const Create = ({ formType, inputType }) =>{
    // formtype = profile, input type=review
    const informatio = 
    ['name', 'vision', 'overview', 'service']
    const profile = 
     ['name', 'SelfIntorduction', 'number', 
     'email', 'facebook', 'twitter', 'whatsApp',
     'otherSocials']
    const projects = 
        ['location','information','sold', 'ratings',]

    ///Information', 'Profile', 'projects
    const objectApi = {
        information: <InfoForm inputtype={inputType} />,
        profile: <ProfileForm inputtype={inputType} />,
        projects: <ProjectsForm inputtype={inputType} />
    }

    return objectApi[formType]
}

export default Create