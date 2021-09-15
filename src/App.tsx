import Main from "./routes/Main";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import GameRoute from "./routes/GameRoute";
import SocialLinkRoute from "./routes/SocialLinkRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/:game/:arcana"}>
          <SocialLinkRoute />
        </Route>

        <Route path="/:game">
          <GameRoute />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
