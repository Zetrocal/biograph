"use client";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import styles from "./NavBar.module.css"

const Navbar: React.FC = (props) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={styles.navbarApp}>
			<div className={styles.navbarContainer}>
				<ul className={ isOpen? styles.navElements + " " + styles.ulMedia: styles.navElements}>
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

const NavElements = styled.ul<{ $show: boolean }>`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
    flex-basis: 800px;
    margin: auto;

	@media (max-width: 480px) {
		display: ${({ $show }) => ($show ? "flex" : "none")};
		flex-direction: column;
        height: auto;
        position: absolute;
        top: 100%;
        right: 0;
        background: rgb(var(--background-dark-1));

        li{
            padding: 10px 50px;
        }
	}
`;

const BurgerContainer = styled.div`
	display: none;
    position: absolute;
    top: 0;
    right: 0;
	@media (max-width: 480px) {
		display: block;
	}
`;
