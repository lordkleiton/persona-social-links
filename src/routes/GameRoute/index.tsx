import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import p3data from "../../data/p3";
import { Background } from "./styles";
import Card from "../../components/Card";

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
  const gameData = dataMap[match.url];
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
          key={`${link.arcana}-${link.name}`}
        />
      ))}
    </Background>
  );
};

export default GameRoute;
