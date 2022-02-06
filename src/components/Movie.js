import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.scss";
function Movie({ coverImg, title, year, summary, genres, id }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<span>{year}</span>
			<p>{summary}</p>
			<ul>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
