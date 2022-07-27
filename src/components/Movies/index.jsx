import styles from '../Movies/index.module.css';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleSetValue = value => {
    setValue(value);
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('get');
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US&query=${value}&page=1&include_adult=false`
      )
      .then(res => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.movies}>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={e => {
            handleSetValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {data.map(el => (
          <Fragment key={el.id}>
            <NavLink
              className={styles.nav}
              to={`/goit-react-hw-05-movies/movies/${el.id}`}
              state={{ from: '/goit-react-hw-05-movies/movies/' }}
            >
              {el.original_title}
            </NavLink>
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Movie;
