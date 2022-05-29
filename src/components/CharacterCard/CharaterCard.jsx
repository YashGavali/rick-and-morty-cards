import { Container, Row } from 'react-bootstrap';
import SingleCard from '../SingleCard/SingleCard';

const CharacterCard = ({ fetchedData, likeButtonHandler }) => {
  const [firstObj] = fetchedData;

  const cardList = fetchedData.map((data, index) => {
    const { name, id, status, species, image, gender } = data;

    return (
      <SingleCard
        key={id}
        name={name}
        status={status}
        species={species}
        image={image}
        gender={gender}
        likeBtnText={'Like'}
        likeButtonHandler={() => {
          likeButtonHandler(index);
        }}
      />
    );
  });

  return (
    <div>
      <Container>
        <Row>{cardList}</Row>
      </Container>
    </div>
  );
};

export default CharacterCard;
