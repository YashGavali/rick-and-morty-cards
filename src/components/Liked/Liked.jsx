import { Container, Row } from 'react-bootstrap';
import SingleCard from '../SingleCard/SingleCard';

const Liked = ({ liked, dislikeButtonHandler, likeButtonHandler }) => {
  console.log(liked);

  const cardList = liked.map((data, index) => {
    const { name, id, status, species, image, gender } = data;

    return (
      <SingleCard
        key={id}
        name={name}
        status={status}
        species={species}
        image={image}
        gender={gender}
        likeBtnText={'Dislike'}
        dislikeButtonHandler={() => {
          dislikeButtonHandler(index);
        }}
        likeButtonHandler={() => {
          dislikeButtonHandler(index);
        }}
      />
    );
  });

  return (
    <div>
      <Container>{liked.length !== 0 && <Row>{cardList}</Row>}</Container>
      {liked.length === 0 && <h1>No Liked characters found</h1>}
    </div>
  );
};

export default Liked;
