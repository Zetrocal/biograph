
import PercentCard, { TPercentCard } from "@/components/Cards/PercentCard";
import { getTechnologies } from "@/services/technologies";


const ProjectsContainer: React.FC = async (props) => {
	const data = await getTechnologies();

	return (
		<div className="md:p-10 mb-12 p-2 py-12">
			<div className="md:p-12 p-2 pb-12 max-w-4xl m-auto">
				<h1 className="md:text-4xl text-2xl text-center w-auto border border-emerald-700 p-4">TECH STACK</h1>
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
