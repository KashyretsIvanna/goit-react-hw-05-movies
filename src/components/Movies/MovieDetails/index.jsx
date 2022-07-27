import styles from '../MovieDetails/index.module.css';
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams('');
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US`
      )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <Fragment>
      <Link to={location.state.from}>Back to products</Link>
      <div className={styles.flex}>
        <div>
          <img
            src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.GedgZjFo9t.png"
            alt=" "
          />
        </div>
        <div>
          <h1>{data.original_title} </h1>
          <p>User sore:{(Math.floor(Number(data.vote_average)) / 10) * 100}%</p>
          <h3>Overwiev</h3>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <p>
            {data.genres.map(el => (
              <div>{el.name} </div>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.add}>
        <h3>Additional information</h3>
        <NavLink to="cast">Cast</NavLink>
        <br />
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default MovieDetails;
