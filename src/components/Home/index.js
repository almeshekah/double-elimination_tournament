import { Link } from "react-router-dom";
//styles
import { Description, ListWrapper, Title, Image } from "./styles";

const Home = () => {
	return (
		<>
			<Title> Double-Elimination Tournament 🏅🎖️</Title>
			<Description>choose how many teams in your Tournament</Description>
			<ListWrapper>
				<Link to="/newtournament4">
					<Image
						src="https://image.flaticon.com/icons/png/128/3564/3564198.png"
						alt=" web"
					/>
				</Link>
				<Link to="/newtournament8">
					<Image
						src="https://img-premium.flaticon.com/png/512/3564/3564221.png?token=exp=1621084405~hmac=3f5db6fde59b4cf91d131613167563f3"
						alt=" web"
					/>
				</Link>
				<Link to="/newtournament16">
					<Image
						src="https://img-premium.flaticon.com/png/512/1982/1982430.png?token=exp=1621115377~hmac=6a383a3969fb01f1d0e39074b4b85922"
						alt=" web"
					/>
				</Link>
			</ListWrapper>
		</>
	);
};

export default Home;
