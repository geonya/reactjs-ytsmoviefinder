import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
		<div className={styles.container}>
			<img
				src={movie.background_image}
				alt={movie.title}
				className={styles.detail__bg_img}
			/>
			<a href={process.env.PUBLIC_URL} className={styles.home}>
				<span>home</span>
			</a>
			{loading ? (
				<div className={styles.loader}>
					<span> Loading... </span>
				</div>
			) : (
				<div className={styles.detail}>
					<div>
						<img
							src={movie.large_cover_image}
							alt={movie.title}
							className={styles.detail__cover_img}
						/>
					</div>

					<div>
						<h1 className={styles.detail__title}>{movie.title}</h1>
						<span className={styles.detail__description}>
							{movie.description_full}
						</span>
						<ul className={styles.detail__genres}>
							{movie.genres.map((genre) => (
								<li kye={genre}>{genre}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
