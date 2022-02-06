import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getMovie = async () => {
			const response = await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			);
			const json = await response.json();
			const { movie } = json.data;
			setMovie(movie);
			setLoading(false);
		};
		getMovie();
	}, [id]);
	console.log(movie);
	return (
		<div>
			{loading ? (
				<strong> Loading... </strong>
			) : (
				<div>
					<img src={movie.background_image} alt={movie.title} />
					<h1>{movie.title}</h1>
					<span>{movie.description_full}</span>
					<ul>
						{movie.genres.map((genre) => (
							<li kye={genre}>{genre}</li>
						))}
					</ul>
					<a href={movie.url}>More...</a> <br />
					<a href="/">Home</a>
				</div>
			)}
		</div>
	);
}

export default Detail;
