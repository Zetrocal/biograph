
import PercentCard, { TPercentCard } from "@/components/Cards/PercentCard";
import styles from "./Home.module.css";
import { getTechnologies } from "@/services/technologies";

const TechHabilities: React.FC = async (props) => {
	const data = await getTechnologies(3);

	return (
		<div className={styles.sectionContent + " mb-12"}>
			<h1 className={styles.titleSection}>TECH HABILITIES</h1>
			<div className={styles.sectionGroup}>
				{data.map((element: TPercentCard, index: number) => (
						<PercentCard name={element.name} image={element.image} percent={element.percent} color={element.color} key={element.name} />
					))}
			</div>
		</div>
	);
};

export default TechHabilities;
