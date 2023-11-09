import styled from "styled-components";
import React, { Dispatch, SetStateAction, useState } from "react";
import Hamburger, {Squash, Cross , Twirl, Fade, Slant, Spiral, Divide, Turn, Pivot, Sling, Squeeze, Spin, Rotate
} from "hamburger-react";

//more info at https://hamburger-react.netlify.app
//npm install hamburger-react

type TBurger = {
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Burger:React.FC<TBurger> = ({isOpen, setOpen}) => {
	
	return (
		<BurgerApp>
			<Squash toggled={isOpen} toggle={setOpen} />
		</BurgerApp>
	);
};

export default Burger;

const BurgerApp = styled.div`
	height: 30px;
`;
