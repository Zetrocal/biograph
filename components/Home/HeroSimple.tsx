import Image from "next/image";
import styles from "./HeroSimple.module.css"

const HeroSimple: React.FC = (props) => {

	return (
		<div>
			<div className="HeroSection flex justify-center items-center flex-wrap gap-20">
					<div className={styles.imageProfileContainer}>
						<div className={styles.imageContainer}>
								<Image src="/profile.jpg" alt="Profile" width={500} height={500} className="rounded-full shadow-white" />
						</div>

							<div className={styles.imageContainerBorder}>
								<div className={styles.halfMoonLeft}></div>

								<div className={styles.halfMoonRight}></div>
							</div>
					</div>

				<div className={styles.heroTextSection}>
                    <h1 className="text-5xl pb-8">Website Developer</h1>
                    <p className="text-xl">I’m a frontend developer with experience in React + Typescript + Figma. I worked as a web scrapper developer first from many multilingual
					selling pages such as Kroger, Jumbo, Amazon since 2021 and then experience working with frontend technologies since 2022. Currently on the
					path of practicing with full stack technologies such as AWS, Next.js and Django while I perfect my web design and development knowledge</p>
					
				</div>
			</div>
		</div>
	);
};

export default HeroSimple;


