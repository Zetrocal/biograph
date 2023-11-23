import React, { useState } from "react";
import styles from "./CirclePercent.module.css";
import { TPercentCard } from "../Cards/PercentCard";
import Image from "next/image";

const CirclePercent: React.FC<TPercentCard> = ({ name, image, percent, color }) => {
	return (
		<div className={`${styles["ko-progress-circle"]} `} data-progress={percent}>
			<div className={styles["ko-circle"]}>
				<div className={`${styles["full"]} ${styles["ko-progress-circle__slice"]}`}>
					<div className={`${styles["ko-progress-circle__fill"]} ${styles[color]}`}></div>
				</div>
				<div className={`${styles["ko-progress-circle__slice"]}`}>
					<div className={`${styles["ko-progress-circle__fill"]} ${styles[color]}`}></div>
					<div className={`${styles["ko-progress-circle__fill"]} ${styles["ko-progress-circle__bar"]} ${styles[color]}`}></div>
				</div>
			</div>
			<div className={styles["ko-progress-circle__overlay"]}>
                <Image
                    src={image}
                    alt={name}
                    width={120}
                    height={120}
                />
            </div>
		</div>
	);
};

export default CirclePercent;
