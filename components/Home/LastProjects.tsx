import SimpleCard from "../Cards/SimpleCard";
import styles from "./Home.module.css"
import firstProjects from "@/data/Projects";
import { TSimpleCard } from "../Cards/SimpleCard";

const LastProject:React.FC  = (props) => {
    return(
        <div className={styles.sectionContent}>
            <h1 className={styles.titleSection}>LAST PROJECTS INVOLVED</h1>
            <div className={styles.sectionGroup}>
                {firstProjects.map((element:TSimpleCard, index:number) => (
                    <SimpleCard {...element} key={element.name}/>
                ))}
            </div>
        </div>
    );
}


export default LastProject;

