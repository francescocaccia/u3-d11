import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const BtnFav = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/favourites">
          Favourites
        </Link>
      </Container>
    </Navbar>
  );
};

export default BtnFav;
