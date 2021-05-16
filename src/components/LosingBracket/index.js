import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";

const LosingBracket = ({ losing }) => {
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

	return <Bracket rounds={losing} renderSeedComponent={CustomSeed} />;
};

export default LosingBracket;
