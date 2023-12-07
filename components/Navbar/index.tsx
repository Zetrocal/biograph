"use client";

import Link from "next/link";
import React, { useState } from "react";
import Burger from "./Burger";
import styles from "./NavBar.module.css"

const Navbar: React.FC = (props) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={styles.navbarApp}>
			<div className={styles.navbarContainer}>
				<ul className={ isOpen? `${styles.navElements} ${styles.ulMedia}` : styles.navElements}>
					<li className={styles.option}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.option}>
						<Link href="/projects">Projects</Link>
					</li>
					<li className={styles.option}>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</div>

			<div className={styles.burgerContainer}>
				<Burger isOpen={isOpen} setOpen={setOpen} />
			</div>
		</div>
	);
};

export default Navbar;