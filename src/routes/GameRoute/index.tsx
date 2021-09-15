import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { arcanasArray } from "../../utils/arcanas";
import p3data from "../../data/p3";
import { Background } from "./styles";
import Card from "../../components/Card";

import { Switch, Route } from "react-router-dom";

const availableGames = {
  p3: "/p3",
  p4: "/p4",
  p5: "/p5",
};

const dataMap = {
  [availableGames.p3]: p3data,
};

const GameRoute: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const hasMatch = Object.values(availableGames).includes(match.url);
  const redirect = !match.isExact || !hasMatch;

  useEffect(() => {
    if (redirect) history.push("/");
  }, [history, hasMatch]);

  if (redirect) return null;

  const gameData = dataMap[match.url];

  useEffect(() => {
    if (!gameData) history.push("/");
  }, [history, hasMatch]);

  if (!gameData) return null;

  const data = Object.values(gameData);

  if (match.isExact) {
    return (
      <Background>
        {data.map((link) => (
          <Card
            imagePath={link.image}
            name={link.name}
            arcana={link.arcana}
            key={`${link.arcana}-${link.name}`}
          />
        ))}
      </Background>
    );
  }

  const arcanas = arcanasArray();
  const unionData = arcanas
    .map((arcana) => data.find((d) => d.arcana === arcana.value))
    .filter((ud) => !!ud);

  return (
    <Switch>
      {unionData.map((ud, index) =>
        ud ? (
          <Route key={index} path={match.url + "/" + ud.arcana}>
            <p>{ud?.name}</p>
          </Route>
        ) : null
      )}
    </Switch>
  );
};

export default GameRoute;
