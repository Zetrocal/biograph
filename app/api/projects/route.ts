import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Project } from "@prisma/client";

function errorFormat(testProject: any) {
	if (
		testProject &&
		testProject.name &&
		testProject.image &&
		testProject.title &&
		testProject.subtitle &&
		testProject.description &&
		testProject.technologies
	) {
		return false;
	}
	return true;
}


export async function GET(request: Request) {
	
    let {searchParams} = new URL(request.url);
    let quantity = searchParams? searchParams.get("quantity") : null;
    let filterConfig:any = {
        orderBy: {
            date: "desc"
        },
        select: {
            name: true,
            image: true,
            title: true,
            subtitle: true,
            description: true
        }
    }

    if(quantity) filterConfig.take = Number(quantity)
    
    try{
        const projects = await prisma.project.findMany(filterConfig);
        return NextResponse.json(projects);
    } catch(error:any){
        return NextResponse.json({
			error: {
				code: 400,
				message: "Wrong Params",
				target: "/api/projects",
				details: [
					{
						code: 400,
						message: error.message,
					},
				],
			},
		});
    }
    
	
}

export async function POST(request: Request) {
	let data = await request.json();
    
	try {
		if (Array.isArray(data)) {
			let arrayData: Project[] = [...data];
			let errorProject = arrayData.find(errorFormat);
			if (errorProject) throw "Error project format found: " + JSON.stringify(errorProject);

			for (let project of arrayData) {
				await prisma.project.create({
					data: {
						name: project.name,
						image: project.image,
						title: project.title,
						subtitle: project.subtitle,
						description: project.description,
						technologies: project.technologies,
						date: project.date || new Date(),
						url: project.url || null,
					},
				});
			}
		} else if (data && typeof data === "object") {
			if (errorFormat(data)) throw "Error project format found: " + JSON.stringify(data);
			await prisma.project.create({
				data: {
					name: data.name,
					image: data.image,
					title: data.title,
					subtitle: data.subtitle,
					description: data.description,
					technologies: data.technologies,
					date: data.date || new Date(),
					url: data.url || null,
				},
			});
		}
	} catch (error: any) {
		return NextResponse.json({
			error: {
				code: 400,
				message: "Request payload is invalid",
				target: "/api/projects",
				details: [
					{
						code: 400,
						message: error.message,
					},
				],
			},
		});
	}

	return NextResponse.json({
		status: "success",
		data: {
			posts: data,
		},
	});

}
