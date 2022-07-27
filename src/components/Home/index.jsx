import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=d33121ec8e4d8e2727fc1b2edf68984b'
      )
      .then(res => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(el => (
        <div key={el.id}>
          <NavLink
            to={`/goit-react-hw-05-movies/movies/${el.id}`}
            state={{ from: '/goit-react-hw-05-movies/' }}
          >
            {el.original_title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
