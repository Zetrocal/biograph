import { prisma } from "@/libs/prisma";


export async function getProjects(quantity:null|number=null){
    let filterConfig: any = {
		orderBy: {
			date: "desc",
		},
		select: {
			name: true,
			image: true,
			title: true,
			subtitle: true,
			description: true,
		}
	};

    if (quantity !== null && quantity >= 0) filterConfig.take = quantity;
    const projects = await prisma.project.findMany(filterConfig);
    return projects;
}