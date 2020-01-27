import React, {Component} from 'react';
import Movie from './Movie'


class MovieList extends Component {
    render(){
        const movieNodes = this.props.data.map(movie => {
            return(
                <Movie key={movie.id} url={movie.url}>
                   <a href={movie.url}>{movie.name}</a> 
                </Movie>
            )
        })
        return(
            <div className="movie-list">
                {movieNodes}
            </div>
        )
    }
}

export default MovieList;