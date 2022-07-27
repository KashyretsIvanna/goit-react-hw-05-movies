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
    <div>
      {data.map(el => (
        <div key={el.id}>
          <img src={el.profile_path} alt="" />
          <b>{el.name}</b>
          <p>{el.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
