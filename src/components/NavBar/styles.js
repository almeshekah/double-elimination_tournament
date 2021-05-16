import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
	padding: 0.25em 1em;
	color: black;
`;
export const Logo = styled(Link)`
	padding: 0.75em;
	img {
		width: 8rem;
	}
`;

export const ThemeButton = styled.button`
	font-size: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	background-color: ${(props) => props.theme.mainColor};
	color: ${(props) => props.theme.backgroundColor};
`;

export const NavStyled = styled.nav`
	background-color: ${(props) => props.theme.backgroundColor};
`;
