import React from "react";
class MovieCard extends React.Component {

    render() {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating"> <b>Imbd Rating : </b> <span style={{ color: "grey" }}>{movie.imdbRating}</span>
                        </div>
                        <button className="favourite-btn">Favourite</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;