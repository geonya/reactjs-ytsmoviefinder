import Button from "./Button";
import styles from "./App.module.css";
function App() {
	return (
		<div className="App">
			<h1 className={styles.title}>Welcome to ReactJS !!!</h1>
			<Button text={"Click Me"} />
		</div>
	);
}

export default App;
