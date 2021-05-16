//styles
import { Logo, ThemeButton, NavItem, NavStyled } from "./styles";

const NavBar = (props) => {
	const toggleTheme = props.toggleTheme;
	const currentTheme = props.currentTheme;
	return (
		<NavStyled className="navbar navbar-expand">
			<Logo className="navbar-brand" to="/">
				<img
					src="https://as1.ftcdn.net/jpg/00/89/67/78/500_F_89677829_HLI6k6Ugy7iZSikQ9usgEFu57eYapOHx.jpg"
					alt=" web"
				/>
			</Logo>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<NavItem className="nav-item" exact to="/">
						New Tournament
					</NavItem>

					<ThemeButton className="nav-item" onClick={toggleTheme}>
						{currentTheme === "light" ? "Dark" : "Light"} Mode
					</ThemeButton>
				</div>
			</div>
		</NavStyled>
	);
};

export default NavBar;
