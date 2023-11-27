import { headers } from "next/headers";

const host = headers().get("host");
const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
export const domain = `${protocal}://${host}`;