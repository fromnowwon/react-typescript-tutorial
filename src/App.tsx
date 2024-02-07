import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState["people"]>([
		{
			name: "James",
			url: "https://picsum.photos/id/24/100",
			age: 36,
			note: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		},
		{
			name: "Kobe",
			url: "https://picsum.photos/id/342/100",
			age: 42,
			note: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		},
		{
			name: "Stephen",
			url: "https://picsum.photos/id/4/100",
			age: 32,
			note: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		},
	]);

	return (
		<div className="App">
			<h1>People Invited to my party</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
