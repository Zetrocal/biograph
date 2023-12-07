"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = (props) => {

	const [mountState, setMountState] = useState(false)
	useEffect(() => {
		setMountState(true);
	}, [])

	const animationProfile = {
		opacity: [0, 1, 1],
		scale: [0.5, 1.1, 1],
	};

	const animationBorder = {
		opacity: [0, 1],
		scale: [0.5, 1],
	};

	const softAnimation = {
		opacity: [0, 1],
		scale: [0.8, 1],
	}

	return (
		<HeroApp>
			<div className="HeroSection flex justify-center items-center flex-wrap gap-20 p-4" style={{opacity: mountState? "1": "0"}}>
				<motion.div initial={{ x: "var(--xright)" }} animate={{ x: 0 }} transition={{ duration: 1.4, delay: 2 }}>
					<ImageProfileContainer>
						<ImageContainer>
							<motion.div animate={animationProfile} transition={{ duration: 2 }}>
								<Image src="/shibaInu.png" alt="Profile" width={500} height={500} className="rounded-full shadow-white" />
							</motion.div>
						</ImageContainer>

						<motion.div animate={animationBorder} transition={{ duration: 2, delay: 1.9 }}>
							<ImageContainerBorder>
								<HalfMoonLeft></HalfMoonLeft>

								<HalfMoonRight></HalfMoonRight>
							</ImageContainerBorder>
						</motion.div>
					</ImageProfileContainer>
				</motion.div>

				<motion.div animate={softAnimation} transition={{ duration: 1.4 , delay: 2.6}} >
					<HeroTextSection >
						<h1 className="text-5xl pb-8 leading-tight">Website Developer</h1>
						<p className="text-xl leading-normal">
							I’m a frontend developer with experience in React + Typescript + Figma. I worked as a web scrapper developer first from many
							multilingual selling pages such as Kroger, Jumbo, Amazon since 2021 and then experience working with frontend technologies since
							2022. Currently on the path of practicing with full stack technologies such as AWS, Next.js and Django while I perfect my web design
							and development knowledge
						</p>
					</HeroTextSection>
				</motion.div>
			</div>
		</HeroApp>
	);
};

export default Hero;

const HeroApp = styled.div``;

const ImageProfileContainer = styled.div`
	position: relative;
	width: 600px;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImageContainer = styled.div`
	position: absolute;
	border-radius: 50%;
	z-index: 10;
	img{
		border-radius: 50%;
	}
`;

const ImageContainerBorder = styled.div`
	position: relative;
	width: 540px;
	height: 540px;
	animation-name: rotating;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	z-index: 1;

	@keyframes rotating {
		from {
			rotate: 0 0 1 0deg;
		}
		to {
			rotate: 0 0 1 360deg;
		}
	}
`;

const HalfMoonLeft = styled.div`
	position: absolute;
	height: 540px;
	width: 540px;
	box-shadow: -18px 0px 15px -12px rgb(62, 159, 101);
	border-radius: 50%;
	transform: translate(-15px, 0px);
	rotate: 0 0 1 -50deg;
	background: transparent;
`;

const HalfMoonRight = styled.div`
	position: absolute;
	height: 540px;
	width: 540px;
	box-shadow: 18px 0px 15px -12px rgb(48, 114, 105);
	border-radius: 50%;
	transform: translate(15px, 0px);
	rotate: 0 0 1 -50deg;
	background: transparent;
`;

const HeroTextSection = styled.div`
	min-width: 400px;
	max-width: 800px;
	
	flex: 1;
	animation: fadingText 4s ease-in-out 0s;

	h1 {
		color: rgb(var(--background-clear-2));
		text-shadow: rgb(var(--background-clear-3), 0.5) 1px 0px 10px;
	}
`;
