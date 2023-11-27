import React, {useState} from "react";
import styles from "./Home.module.css"
import PercentCard, { TPercentCard } from "../Cards/PercentCard";
import { domain } from "@/data/currentDomain";


async function getLastTechs(){
    let results = await fetch(`${domain}/api/technologies?quantity=5`, { cache: "no-store" });
    let data = await results.json();
    return data
}

const TechHabilities:React.FC  = async (props) => {
    const data = await getLastTechs();

    return(
        <div className={styles.sectionContent + " mb-12"}>
            <h1 className={styles.titleSection}>TECH HABILITIES</h1>
            <div className={styles.sectionGroup}>
                {data.map((element:TPercentCard, index:number) => (
                    <PercentCard {...element} key={element.name}/>
                ))}
            </div>
        </div>
    );
}


export default TechHabilities;
