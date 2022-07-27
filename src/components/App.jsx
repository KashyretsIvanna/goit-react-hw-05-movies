import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
const Home = lazy(() => import('./Home'));
const Movie = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const Cast = lazy(() => import('./Movies/MovieDetails/Cast'));
const Rewievs = lazy(() => import('./Movies/MovieDetails/Reviews'));

const Navbar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: lightgray;
  box-shadow: 2px 4px 7px gray;
`;
const Nav = styled(NavLink)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  font-size: 30px;
  &.active {
    color: blue;
  }
`;
export const App = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        fontSize: 40,
        color: '#010101',
        margin: '0px',
        fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
      }}
    >
      <Navbar>
        <Nav to="/goit-react-hw-05-movies/">Home</Nav>
        <Nav to="/goit-react-hw-05-movies/movies">Movies</Nav>
      </Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movie />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Rewievs />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
