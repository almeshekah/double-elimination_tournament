import React from "react";
import { Link } from "react-router-dom";

import { Logo, ThemeButton, NavStyled } from "./styles";

const NavBar = (props) => {
	const toggleTheme = props.toggleTheme;
	const currentTheme = props.currentTheme;
	return (
		<NavStyled className="navbar navbar-expand-lg">
			<Logo className="navbar-brand" to="/">
				<img src="https://www.flaticon.com/svg/vstatic/svg/2780/2780137.svg?token=exp=1620782356~hmac=6038644eae47c06168683dbc0fcb22de" />
			</Logo>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<Link className="nav-item" exact to="/newgame">
						New Game
					</Link>

					<ThemeButton className="nav-item" onClick={toggleTheme}>
						{currentTheme === "light" ? "Dark" : "Light"} Mode
					</ThemeButton>
				</div>
			</div>
		</NavStyled>
	);
};

export default NavBar;
