import { Route, Switch } from "react-router";

//components
import Home from "../Home";
import FourParticipants from "../FourParticipants";
import EightParticipants from "../EightParticipants";
import SixteenParticipants from "../SixteenParticipants";

const Routes = () => {
	return (
		<Switch>
			<Route path="/newtournament4">
				<FourParticipants />
			</Route>
			<Route path="/newtournament8">
				<EightParticipants />
			</Route>
			<Route path="/newtournament16">
				<SixteenParticipants />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
