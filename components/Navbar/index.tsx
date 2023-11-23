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
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
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