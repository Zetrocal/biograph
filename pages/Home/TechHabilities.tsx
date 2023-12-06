
import styles from "./Home.module.css";
import { headers } from "next/headers";
import PercentCard, { TPercentCard } from "../../components/Cards/PercentCard";
import { getTechnologies } from "@/services/technologies";

/* async function getLastTechs(){
    const host = headers().get("host");
	const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
	const domain = `${protocal}://${host}`;
    let results = await fetch(`${domain}/api/technologies?quantity=5`, { cache: "no-store" });
    let data:any = [];
    try{
    data = await results.json();
    } catch(error){
        console.log(results)
    }

    return data
}

const TechHabilities:React.FC  = async (props) => {
    const data = await getLastTechs(); */

/* const TechHabilities:React.FC  =  (props) => {

    let [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/technologies?quantity=5`)
        .then((res) => res.json())
        .then((jsonData) => {
            setData(jsonData)
        });
    }, []) */

const TechHabilities: React.FC = async (props) => {
	const data = await getTechnologies(3);
    
	return (
		<div className={styles.sectionContent + " mb-12"}>
			<h1 className={styles.titleSection}>TECH HABILITIES</h1>
			<div className={styles.sectionGroup}>
				{data && data.map((element: TPercentCard, index: number) => (
					<PercentCard {...element} key={element.name} />
				))}
			</div>
		</div>
	);
};

export default TechHabilities;
