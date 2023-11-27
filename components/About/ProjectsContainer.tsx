import PercentCard, { TPercentCard } from "../Cards/PercentCard";

async function getTechs(){
    let results = await fetch(`http://127.0.0.1:3000/api/technologies`);
    let data = await results.json();
    return data
}

const ProjectsContainer: React.FC = async (props) => {
	const data = await getTechs();

	return (
		<div className="p-10 mb-12">
			<div className="p-12">
				<h1 className="text-4xl text-center w-auto border border-emerald-700 p-4">TECH STACK</h1>
			</div>

			<div className="flex gap-8 flex-wrap justify-center">
			{data.map((element:TPercentCard, index:number) => (
                    <PercentCard {...element} key={element.name}/>
                ))}
			</div>
		</div>
	);
};

export default ProjectsContainer;
