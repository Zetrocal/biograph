
import PercentCard, { TPercentCard } from "@/components/Cards/PercentCard";
import { getTechnologies } from "@/services/technologies";


const ProjectsContainer: React.FC = async (props) => {
	const data = await getTechnologies();

	return (
		<div className="p-10 mb-12">
			<div className="p-12">
				<h1 className="text-4xl text-center w-auto border border-emerald-700 p-4">TECH STACK</h1>
			</div>

			<div className="flex gap-8 flex-wrap justify-center">
				{data.map((element: TPercentCard, index: number) => (
					<PercentCard name={element.name} image={element.image} percent={element.percent} color={element.color} key={element.name} />
				))}
			</div>
		</div>
	);
};

export default ProjectsContainer;
