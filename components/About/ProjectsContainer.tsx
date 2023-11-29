import { headers } from "next/headers";
import PercentCard, { TPercentCard } from "../Cards/PercentCard";

async function getTechs() {
	/* const host = headers().get("host");
	const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
	const domain = `${protocal}://${host}`;
	let results = await fetch(`${domain}/api/technologies`, { cache: "no-store" });
	let data = await results.json(); */
	let data:any = [];
	return data;
}

const ProjectsContainer: React.FC = async (props) => {
	const data = await getTechs();

	return (
		<div className="p-10 mb-12">
			<div className="p-12">
				<h1 className="text-4xl text-center w-auto border border-emerald-700 p-4">TECH STACK</h1>
			</div>

			<div className="flex gap-8 flex-wrap justify-center">
				{data.map((element: TPercentCard, index: number) => (
					<PercentCard {...element} key={element.name} />
				))}
			</div>
		</div>
	);
};

export default ProjectsContainer;
