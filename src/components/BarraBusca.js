import { useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
const BarraBusca = () => {
  const history = useHistory();
  const [myText, setMyText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/" + myText);
  };

  return (
    <Container>
      <h1>GitBusca</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="digite um nome de usuário do GitHub"
                value={myText}
                onChange={(e) => setMyText(e.target.value)}
              ></Form.Control>
              <Button className="btn btn-primary" type="submit" name="buscar">
                Buscar Usuário
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default BarraBusca;
