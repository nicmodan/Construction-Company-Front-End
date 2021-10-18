import React from "react";
import '../style.css'
import InfoForm from "../apiRequest/info";
import ProjectsForm from "../apiRequest/project";
import ProfileForm from "../apiRequest/profile";

const Remove = ({ formType, inputType })=>{
    // formtype = profile, input type=review
    ///Information', 'Profile', 'projects
    const objectApi = {
        information: <InfoForm inputtype={inputType} />,
        profile: <ProfileForm inputtype={inputType} />,
        projects: <ProjectsForm inputtype={inputType} />
    }

    return objectApi[formType]
}
export default Remove