import { useState } from "react";

//components
import LosingBracket from "../LosingBracket";
import WiningBracket from "../WiningBracket";

const EightParticipants = () => {
	const [team1, setTeam1] = useState("");
	const [team2, setTeam2] = useState("");
	const [team3, setTeam3] = useState("");
	const [team4, setTeam4] = useState("");
	const [team5, setTeam5] = useState("");
	const [team6, setTeam6] = useState("");
	const [team7, setTeam7] = useState("");
	const [team8, setTeam8] = useState("");

	const wining = [
		{
			title: "Round 1",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team1 }, { name: team2 }],
				},
				{
					id: 2,
					date: new Date().toDateString(),
					teams: [{ name: team3 }, { name: team4 }],
				},
				{
					id: 3,
					date: new Date().toDateString(),
					teams: [{ name: team5 }, { name: team6 }],
				},
				{
					id: 4,
					date: new Date().toDateString(),
					teams: [{ name: team7 }, { name: team8 }],
				},
			],
		},

		{
			title: "Round 2",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team1 }, { name: team3 }],
				},
				{
					id: 2,
					date: new Date().toDateString(),
					teams: [{ name: team5 }, { name: team7 }],
				},
			],
		},
		{
			title: "Round 3",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team1 }, { name: team5 }],
				},
			],
		},
		{
			title: "Round 4",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team1 }, { name: team2 }],
				},
			],
		},
	];

	const losing = [
		{
			title: "Round 1",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team2 }, { name: team4 }],
				},
				{
					id: 2,
					date: new Date().toDateString(),
					teams: [{ name: team6 }, { name: team8 }],
				},
			],
		},
		{
			title: "Round 2",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team2 }, { name: team3 }],
				},
				{
					id: 2,
					date: new Date().toDateString(),
					teams: [{ name: team6 }, { name: team7 }],
				},
			],
		},
		{
			title: "Round 3",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team2 }, { name: team6 }],
				},
			],
		},
		{
			title: "Round 4",
			seeds: [
				{
					id: 1,
					date: new Date().toDateString(),
					teams: [{ name: team2 }, { name: team5 }],
				},
			],
		},
	];

	return (
		<div>
			<form
				className="mt-5"
				style={{ textAlign: "center", marginBottom: "50px", marginLeft: "0" }}
			>
				<h1>Team Name</h1>

				<label className="form-label">
					Team 1 :
					<input
						type="text"
						value={team1}
						onChange={(e) => setTeam1(e.target.value)}
					/>
				</label>

				<label className="form-label">
					Team 2 :
					<input
						type="text"
						value={team2}
						onChange={(e) => setTeam2(e.target.value)}
					/>
				</label>

				<label className="form-label">
					Team 3 :
					<input
						type="text"
						value={team3}
						onChange={(e) => setTeam3(e.target.value)}
					/>
				</label>

				<label className="form-label">
					Team 4 :
					<input
						type="text"
						value={team4}
						onChange={(e) => setTeam4(e.target.value)}
					/>
				</label>
				<label className="form-label">
					Team 5 :
					<input
						type="text"
						value={team5}
						onChange={(e) => setTeam5(e.target.value)}
					/>
				</label>
				<label className="form-label">
					Team 6 :
					<input
						type="text"
						value={team6}
						onChange={(e) => setTeam6(e.target.value)}
					/>
				</label>
				<label className="form-label">
					Team 7 :
					<input
						type="text"
						value={team7}
						onChange={(e) => setTeam7(e.target.value)}
					/>
				</label>
				<label className="form-label">
					Team 8 :
					<input
						type="text"
						value={team8}
						onChange={(e) => setTeam8(e.target.value)}
					/>
				</label>
			</form>
			<WiningBracket wining={wining} />
			<LosingBracket losing={losing} />
		</div>
	);
};

export default EightParticipants;
