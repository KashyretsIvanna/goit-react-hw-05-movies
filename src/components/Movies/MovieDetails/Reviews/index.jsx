import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Rewievs = () => {
  const [ourData, setData] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US`
      )
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <div>
      {ourData.map(el => (
        <div key={el.id}>
          <h3>Author: {el.author}</h3>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Rewievs;
