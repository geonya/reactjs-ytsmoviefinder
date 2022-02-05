import { useEffect, useState } from "react";
function Hello() {
	function hiFn() {
		console.log("created :)");
		return byFn;
	}
	function byFn() {
		console.log("deleted :(");
	}
	useEffect(hiFn, []);
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}
function App() {
	const [showing, setShowing] = useState(true);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
