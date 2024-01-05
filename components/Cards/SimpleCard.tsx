import Image from "next/image"
import styles from "./SimpleCard.module.css"

export type TSimpleCard = {
    name: string
    image: string,
    title: string,
    subtitle: string,
    description: string
}
const SimpleCard:React.FC<TSimpleCard>  = ({name, image, title, subtitle, description}) => {
    return(
        <div className={styles.projectContainer}>
            <div className={styles.imageProjectContainer}>
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={250}
                    loading="lazy"
                />
            </div>

            <div className={styles.textProjectContainer}>
                <div className={styles.headerSection}>
                    <h2 className="md:text-2xl text-xl">{title}</h2>
                    <h3 className="md:text-sm text-neutral-300 text-xs">{subtitle}</h3>
                </div>

                <p className="md:text-base text-sm">
                    {description}
                </p>
            </div>

        </div>
    );
}


export default SimpleCard;
