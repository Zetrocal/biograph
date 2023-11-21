import React, {useState} from "react";
import styles from "./Home.module.css"
import PercentCard from "../Cards/PercentCard";
import latestHabilites from "@/data/Tech";
import { TSimpleCard } from "../Cards/SimpleCard";

const TechHabilities:React.FC  = (props) => {
    return(
        <div className={styles.sectionContent}>
            <h1 className={styles.titleSection}>TECH HABILITIES</h1>
            <div className={styles.sectionGroup}>
                {latestHabilites.map((element:TSimpleCard, index:number) => (
                    <PercentCard {...element} key={element.name}/>
                ))}
            </div>
        </div>
    );
}


export default TechHabilities;
