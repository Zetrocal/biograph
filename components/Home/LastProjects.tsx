import SimpleCard from "../Cards/SimpleCard";
import styles from "./Home.module.css"
import { TSimpleCard } from "../Cards/SimpleCard";

async function getLastProjects(){
    let results = await fetch(`http://127.0.0.1:3000/api/projects?quantity=3`);
    let data = await results.json();
    return data
}

const  LastProject:React.FC  = async (props) => {
    const data = await getLastProjects();
    return(
        <div className={styles.sectionContent}>
            <h1 className={styles.titleSection}>LAST PROJECTS INVOLVED</h1>
            <div className={styles.sectionGroup}>
                {data && data.map((element:TSimpleCard, index:number) => (
                    <SimpleCard {...element} key={element.name}/>
                ))}
            </div>
        </div>
    );
}

export default LastProject;
