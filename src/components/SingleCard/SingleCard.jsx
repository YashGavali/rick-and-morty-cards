import { useState } from 'react';
import { Button, Card, CardImg, Col } from 'react-bootstrap';
import styles from './SingleCard.module.css';
import { FcLike } from 'react-icons/fc';
const SingleCard = ({
  name,
  id,
  status,
  species,
  image,
  gender,
  likeBtnText,
  likeBtnColor,
  likeButtonHandler,
  dislikeButtonHandler,
  index,
}) => {
  const [flipped, setFlipped] = useState(true);
  const [likeStatus, setLikeStatus] = useState(true);

  return (
    <Card key={id} style={{ width: '25rem', margin: '8px' }} border="info">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          {flipped && (
            <div>
              <div className={styles.specs}>
                <div className={styles.content}>Gender</div>
                <div className={styles.content}>{gender}</div>
              </div>
              <div className={styles.specs}>
                <div className={styles.content}>Status</div>
                <div className={styles.content}>{status}</div>
              </div>
              <div className={styles.specs}>
                <div className={styles.content}>Species</div>
                <div className={styles.content}>{species}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button
                  variant="primary"
                  onClick={() => {
                    setFlipped(!flipped);
                  }}
                >
                  Flip
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setLikeStatus(!likeStatus);
                    likeButtonHandler();
                  }}
                >
                  {likeBtnText}
                </Button>
              </div>
            </div>
          )}
          {!flipped && (
            <div
              className="mb-4"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <div>
                <Button
                  variant="primary"
                  onClick={() => {
                    setFlipped(!flipped);
                  }}
                >
                  Flip
                </Button>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={(index) => {
                    likeButtonHandler(index);
                    setLikeStatus(!likeStatus);
                  }}
                >
                  {likeBtnText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
