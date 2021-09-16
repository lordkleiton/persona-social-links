import Main from "./routes/Main";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import GameRoute from "./routes/GameRoute";
import SocialLink from "./routes/SocialLink";
import styled from "styled-components";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 1rem auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path={"/:game/:arcana"}>
            <SocialLink />
          </Route>

          <Route path="/:game">
            <GameRoute />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </AppContainer>
  );
}

export default App;
