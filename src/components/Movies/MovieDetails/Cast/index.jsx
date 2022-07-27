import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US`
      )
      .then(res => {
        setData(res.data.cast);
        console.log(res.data.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <ul>
      {data.map(el => (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
            alt=""
          />
          <li key={el.id}>
            <p>{el.name}</p>

            <p>Character: {el.character}</p>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Cast;
