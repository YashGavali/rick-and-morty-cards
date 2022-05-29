import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharaterCard';
import Liked from '../Liked/Liked';

const Wrapper = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [liked, setLiked] = useState([]);
  const [isNotFirstTime, setIsNotFirstTime] = useState(false);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setFetchedData(results);
      })
      .catch(() => console.log('error'));
  }, []);
  useEffect(() => {
    const items = localStorage.getItem('likedList');
    if (items) {
      const ListData = JSON.parse(items);
      setLiked(ListData);
    }
  }, []);

  useEffect(() => {
    if (isNotFirstTime) {
      localStorage.setItem('likedList', JSON.stringify(liked));
    } else {
      setIsNotFirstTime(true);
    }
  }, [liked, isNotFirstTime]);

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/liked">Liked</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/home"
          element={
            <CharacterCard
              fetchedData={fetchedData}
              likeButtonHandler={(index) => {
                const list = [...liked];
                list.push(fetchedData[index]);
                setLiked(list);
              }}
            />
          }
        />

        <Route
          path="/liked"
          element={
            <Liked
              liked={liked}
              dislikeButtonHandler={(index) => {
                const list = [...liked];
                list.splice(index, 1);
                setLiked(list);
              }}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Wrapper;
