import React from "react";
import { useRouteMatch } from "react-router-dom";
import { arcanasArray } from "../../utils/arcanas";
import p3data from "../../data/p3";

interface PathProps {
  arcana: string;
  game: string;
}

const availableGames = {
  p3: "p3",
  p4: "p4",
  p5: "p5",
};

const dataMap = {
  [availableGames.p3]: p3data,
};

const SocialLinkRoute: React.FC = () => {
  const match = useRouteMatch();
  const params = match.params as PathProps;
  const gameData = dataMap[params.game];
  const arcanas = arcanasArray();
  const data = Object.values(gameData);
  const currentArcana = arcanas.find((arcana) => arcana.key === params.arcana);
  const currentLink = data.find((d) => d.arcana === currentArcana?.value);

  console.log(currentArcana);
  console.log(currentLink);

  return null;
};

export default SocialLinkRoute;
