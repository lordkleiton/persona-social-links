import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { arcanasArray } from "../../utils/arcanas";
import p3data from "../../data/p3";

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

  console.log(match);
  console.log(history);

  useEffect(() => {
    if (!hasMatch) history.push("/");
  }, [history, hasMatch]);

  if (!hasMatch) return null;

  const gameData = dataMap[match.url];

  if (!gameData) return null;

  const arcanas = arcanasArray();
  const data = Object.values(gameData);
  const unionData = arcanas
    .map((arcana) => data.find((d) => d.arcana === arcana.value))
    .filter((ud) => !!ud);

  console.log(unionData);

  return null;
};

export default GameRoute;
