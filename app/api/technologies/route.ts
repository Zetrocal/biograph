import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Technology } from "@prisma/client";

function errorFormat(testTech: any) {
	if (testTech && testTech.name && testTech.image && testTech.percent >= 0 && testTech.color && testTech.date) {
		return false;
	}
	return true;
}

export async function GET(request: Request) {
	let { searchParams } = new URL(request.url);
	let quantity = searchParams ? searchParams.get("quantity") : null;
	let filterConfig: any = {
		orderBy: {
			date: "desc",
		},
		select: {
			name: true,
			image: true,
			percent: true,
			color: true,
		},
	};

	if (quantity) filterConfig.take = Number(quantity);

	try {
		const techs = await prisma.technology.findMany(filterConfig);
		return NextResponse.json(techs);
	} catch (error: any) {
		return NextResponse.json({
			error: {
				code: 400,
				message: "Wrong Params",
				target: "/api/technology",
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
            
			let arrayData: Technology[] = [...data];
			let errorTech = arrayData.find(errorFormat);
            console.log(errorTech)
			if (errorTech) throw "Error tech format found: " + JSON.stringify(errorTech);
            
			for (let tech of arrayData) {
                console.log(tech)
				await prisma.technology.create({
					data: {
						name: tech.name,
						image: tech.image,
						percent: tech.percent,
						color: tech.color,
						date: tech.date || new Date(),
					},
				});
			}
		} else if (data && typeof data === "object") {
			if (errorFormat(data)) throw "Error tech format found: " + JSON.stringify(data);
			await prisma.technology.create({
				data: {
					name: data.name,
					image: data.image,
					percent: data.percent,
					color: data.color,
					date: data.date || new Date(),
				},
			});
		}
	} catch (error: any) {
		return NextResponse.json({
			error: {
				code: 400,
				message: "Request payload is invalid",
				target: "/api/technology",
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
