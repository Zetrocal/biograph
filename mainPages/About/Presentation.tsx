import Image from "next/image";
import styles from "./About.module.css";

const Presentation:React.FC  = (props) => {
    return(
        <div className="flex justify-center items-center md:p-10 flex-wrap p-2">

            <div className={styles.imageSection}>
				<Image 
                    src="/profile.jpg"
                    alt="Profile"
                    width={400}
                    height={700}
					loading="lazy"
                />
			</div>

			<div className={styles.descriptionSection}>
				<div className={styles.headerSection}>
					<h1 className="md:text-4xl text-2xl">Damian Cortez Candia</h1>
					<h2 className="md:text-sm text-xs text-neutral-300">Electronic Engineer | Web Developer</h2>
					<h3 className="md:text-sm text-xs text-neutral-300">Cochabamba - Bolivia</h3>
				</div>

				<div className={styles.description}>
					<p className="md:text-base text-sm">
						Hello Everyone! I am Damian, an enthusiastic and driven individual with a degree in Electronics Engineering. My journey has taken me
						into the dynamic realm of front-end development, where I've honed my skills and cultivated a passion for crafting seamless user
						experiences. With an upper-intermediate proficiency in English, I embrace challenges in fast-paced environments. My aspiration is to
						evolve into a masterful full-stack developer, and my journey involves a perpetual quest for knowledge in emerging technologies. I thrive
						on continuous learning and actively seek opportunities to broaden my skill set. Adaptable and eager to contribute, I am on the lookout
						for new and exciting prospects that not only allow me to apply my existing expertise but also offer a fertile ground for learning and
						growth
					</p>
				</div>
			</div>
        </div>
    );
}


export default Presentation;