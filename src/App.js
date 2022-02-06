import { useEffect, useState } from "react";
function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDos((currentArray) => [toDo, ...currentArray]);
		setToDo("");
	};
	console.log(toDos.map((toDo, index) => <li key={index}>{toDo}</li>));
	return (
		<div>
			<h1>My To-Do ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="add list"
				/>
				<button>Add ToDo</button>
			</form>
			<hr />
			<div>
				<ul>
					{toDos.map((toDo, index) => (
						<li key={index}>{toDo}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
