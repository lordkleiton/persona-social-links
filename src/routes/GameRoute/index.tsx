import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import p3data from "../../data/p3";
import { Background } from "./styles";
import Card from "../../components/Card";
import { Games } from "../../enums/games";

interface PathProps {
  game: string;
}

const dataMap = {
  [Games.p3.valueOf()]: p3data,
};

const GameRoute: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const params = match.params as PathProps;
  const gameData = dataMap[params.game];
  const redirect = !match.isExact || !gameData;

  useEffect(() => {
    if (redirect) history.push("/");
  }, [history, redirect]);

  if (redirect) return null;

  const data = Object.values(gameData);

  return (
    <Background>
      {data.map((link) => (
        <Card
          imagePath={link.image}
          name={link.name}
          arcana={link.arcana}
          game={params.game}
          key={`${link.arcana}-${link.name}`}
        />
      ))}
    </Background>
  );
};

export default GameRoute;
