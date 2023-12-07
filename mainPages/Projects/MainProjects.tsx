
import SimpleCard, { TSimpleCard } from "@/components/Cards/SimpleCard";
import styles from "./MainProjects.module.css";
import { getProjects } from "@/services/projects";

export default async function Projects() {
	const data = await getProjects();
	
    return (
		<div className="p-12">
			<div className={styles.sectionGroup}>
				{data.map((element: TSimpleCard, index: number) => (
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
}
