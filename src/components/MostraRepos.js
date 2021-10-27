import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const MostraRepos = ({ baseURL, clientID, clientSecret }) => {
  //pegando o valor de user pela url (ROUTE)
  const { user } = useParams();
  const [dadosRepo, setDadosRepo] = useState([]);
  //buscando detalhes do usuário
  const getRepos = () => {
    axios
      .get(
        `${baseURL}users/${user}/repos?client_id=${clientID}&client_secret=${clientSecret}`
      )
      .then((res) => {
        const myRepo = res.data;
        setDadosRepo(myRepo);
        console.log(dadosRepo);
        console.log(
          `${baseURL}users/${user}/repos?client_id=${clientID}&client_secret=${clientSecret}`
        );
      });
  };

  useEffect(() => getRepos(), []);

  return (
    <div>
      <h2>Mostrando Repos para o usuário {user}</h2>
      {dadosRepo.map((repos) => (
        <div key={repos.id}>
          <Card bg="success" text="white" className="mb-3 p-2">
            <Card.Title>Repo: {repos.name}</Card.Title>
            <Card.Subtitle>Id Repo: {repos.id}</Card.Subtitle>
            <Card.Text>Linguagem: {repos.language}</Card.Text>
          </Card>
        </div>
      ))}
      ;
    </div>
  );
};

export default MostraRepos;
