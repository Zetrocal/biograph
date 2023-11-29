import SimpleCard from "../Cards/SimpleCard";
import styles from "./Home.module.css"
import { headers } from "next/headers";
import { TSimpleCard } from "../Cards/SimpleCard";


async function getLastProjects(){
    /* const host = headers().get("host");
	const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
	const domain = `${protocal}://${host}`;
    let results = await fetch(`${domain}/api/projects?quantity=3`, { cache: "no-store" });
    let data = await results.json(); */
    let data:any = [];
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
