
import SimpleCard, { TSimpleCard } from "@/components/Cards/SimpleCard";
import styles from "./Home.module.css";
import { getProjects } from "@/services/projects";


const LastProject: React.FC = async (props) => {
	const data = await getProjects(3);
	
    return (
		<div className={styles.sectionContent}>
			<h1 className={styles.titleSection}>LAST PROJECTS INVOLVED</h1>
			<div className={styles.sectionGroup}>
				{data &&
					data.map((element: TSimpleCard, index: number) => (
						<SimpleCard
							name={element.name}
							image={element.image}
							title={element.title}
							subtitle={element.subtitle}
							description={element.description}
							key={element.name}
						/>
					))}
			</div>
		</div>
	);
};

export default LastProject;
