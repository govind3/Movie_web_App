import React from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
  <>
    <Navigation movie={movie.original_title} />
    <MovieInfo movie={movie} />
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
      release_date={movie.release_date}
    />
    <Grid header="Actors">
      {movie.actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}     
    </Grid>
    <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

      
  </>
  
  )
};

export default Movie;