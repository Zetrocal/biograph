import { TPercentCard } from "@/components/Cards/PercentCard";
import { prisma } from "@/libs/prisma";


export async function getTechnologies(quantity:null|number=null){
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

    if (quantity !== null && quantity >= 0) filterConfig.take = quantity;
    const techs = await prisma.technology.findMany(filterConfig);
    return techs;
}