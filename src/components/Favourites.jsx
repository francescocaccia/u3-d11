import { Button, Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col>
          {favourites.map(company => (
            <div>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromFavorite(company));
                }}
              >
                Remove
              </Button>
              <Company key={company._id} company={company} />
            </div>
          ))}
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
};

export default Favourites;
