import { useEffect, useState } from "react";
function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
		);
		const json = await response.json();
		const { movies } = json.data;
		setLoading(false);
		setMovies(movies);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<ul>
						{movies.map((movie) => (
							<li>
								<img src={movie.medium_cover_image} alt="" />
								<h1 key={movie.id}>{movie.title}</h1>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;

//
