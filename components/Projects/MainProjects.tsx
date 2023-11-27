import SimpleCard, { TSimpleCard } from "@/components/Cards/SimpleCard";
import styles from "./MainProjects.module.css"
import { domain } from "@/data/currentDomain";

async function getLastProjects(){
    let results = await fetch(`${domain}/api/projects`, { cache: "no-store" });
    let data = await results.json();
    return data
}

export default async function Projects(){
    const data = await getLastProjects();
    return (
        <div className="p-12">
            <div className={styles.sectionGroup}>
                {data && data.map((element:TSimpleCard, index:number) => (
                    <SimpleCard {...element} key={element.name}/>
                ))}
            </div>
        </div>
    )
}