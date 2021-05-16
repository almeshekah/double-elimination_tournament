import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";

const WiningBracket = ({ wining }) => {
	const CustomSeed = ({ seed, breakpoint }) => {
		return (
			<Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
				<SeedItem>
					<div>
						<SeedTeam style={{ color: "red" }}>
							{seed.teams[0]?.name || "NO TEAM "}
						</SeedTeam>
						<SeedTeam>{seed.teams[1]?.name || "NO TEAM "}</SeedTeam>
					</div>
				</SeedItem>
			</Seed>
		);
	};

	return <Bracket rounds={wining} renderSeedComponent={CustomSeed} />;
};

export default WiningBracket;
