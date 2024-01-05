import Presentation from "@/mainPages/About/Presentation"
import ProjectsContainer from "@/mainPages/About/ProjectsContainer"

export default function About(){
    return (
        <div className="md:p-12 p-2 py-12">
            <Presentation/>
            <ProjectsContainer/>
        </div>
    )
}