import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const MostraPerfil = ({ baseURL, clientID, clientSecret }) => {
  const [userID, setUserID] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  //pegando o valor de user pela url (ROUTE)
  const { user } = useParams();

  useEffect(() => {
    axios
      .get(
        `${baseURL}users/${user}?client_id=${clientID}&client_secret=${clientSecret}`
      )
      .then((res) => {
        console.log("dados:" + res.data);
        setUserID(res.data.id);
        setUserAvatar(res.data.avatar_url);
        setUserLogin(res.data.login);
      });
  });
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <Card className="mb-3" style={{ width: "18rem" }}>
            <Card.Img src={userAvatar} alt="foto do perfil" />
            <Card.Body>
              <Card.Title>Usuário: {userLogin}</Card.Title>
              <Card.Text>Id:{userID}</Card.Text>

              <Link to={user + "/repos"}>
                <Button variant="success" className="m-3">
                  Repos
                </Button>
              </Link>
              <Link to={user + "/starred"}>
                <Button variant="primary" className="m-3">
                  Starred
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MostraPerfil;
