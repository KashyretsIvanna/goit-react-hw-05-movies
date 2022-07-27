import styles from '../Movies/index.module.css';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Movie = ({ filter, onSetFilter }) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleSetValue = value => {
    setValue(value);
  };

  useEffect(() => {
    setValue('');
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US&query=${filter}&page=1&include_adult=false`
      )
      .then(res => {
        setData(res.data.results);
      })
      .catch(error => console.log(error));
  }, [filter]);

  const handleSubmit = e => {
    e.preventDefault();
    onSetFilter(value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US&query=${value}&page=1&include_adult=false`
      )
      .then(res => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => console.log(error));
    setValue('');
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

Movie.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Movie;
