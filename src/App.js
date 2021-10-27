import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MostraPerfil from "./components/MostraPerfil";
import MostraRepos from "./components/MostraRepos";
import BarraBusca from "./components/BarraBusca";
import MostraStarred from "./components/MostraStarred";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";

function App() {
  const baseURL = "https://api.github.com/";
  const clientID = "Iv1.bdbf86867acb98da";
  const clientSecret = "a9d1475f454ab60688f3cbf2e0595b9ff0667b7e";

  return (
    <BrowserRouter>
      <div className="App">
        <BarraBusca></BarraBusca>
        <Container>
          <Switch>
            <Route exact path="/:user">
              <MostraPerfil
                baseURL={baseURL}
                clientID={clientID}
                clientSecret={clientSecret}
              ></MostraPerfil>
            </Route>
            <Route exact path="/:user/repos">
              <MostraRepos
                baseURL={baseURL}
                clientID={clientID}
                clientSecret={clientSecret}
              ></MostraRepos>
            </Route>
            <Route exact path="/:user/starred">
              <MostraStarred
                baseURL={baseURL}
                clientID={clientID}
                clientSecret={clientSecret}
              ></MostraStarred>
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
