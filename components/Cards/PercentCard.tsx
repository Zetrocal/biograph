import React, {useState} from "react";
import CirclePercent from "../CirclePercent/CirclePercent";
import styles from "./PercentCard.module.css"

export type TPercentCard = {
    id: number;
    name: string;
    image: string;
    percent: number;
    color: string;
    date: Date;}

const PercentCard:React.FC<TPercentCard>  = (props) => {
    return(
        <div className={styles.percentCardContainer}>
            <CirclePercent {...props}/>
            <h1 className={styles[props.color]}>{props.name}</h1>
        </div>
    );
}


export default PercentCard;
