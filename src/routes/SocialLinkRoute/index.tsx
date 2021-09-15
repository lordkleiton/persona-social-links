import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
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
  const history = useHistory();
  const match = useRouteMatch();
  const params = match.params as PathProps;
  const gameData = dataMap[params.game];
  const arcanas = arcanasArray();
  const data = Object.values(gameData);
  const currentArcana = arcanas.find((arcana) => arcana.key === params.arcana);
  const currentLink = data.find((d) => d.arcana === currentArcana?.value);
  const redirect = !gameData || !currentArcana || !currentLink;

  useEffect(() => {
    if (redirect) history.push(`/${params.game}`);
  }, [history, redirect, params.game]);

  if (redirect) return null;

  console.log(currentLink);

  const levels = currentLink.link_levels;

  return (
    <>
      <p>{currentLink.arcana.toString()}</p>
      <p>{currentLink.image.toString()}</p>
      <div>
        {!!levels.first.length &&
          levels.first.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.second.length &&
          levels.second.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.third.length &&
          levels.third.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.fourth.length &&
          levels.fourth.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.fifth.length &&
          levels.fifth.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.sixth.length &&
          levels.sixth.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.seventh.length &&
          levels.seventh.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.eighth.length &&
          levels.eighth.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.ninth.length &&
          levels.ninth.map((level) => <p key={Math.random()}>{level}</p>)}
        {!!levels.tenth.length &&
          levels.tenth.map((level) => <p key={Math.random()}>{level}</p>)}
      </div>
      <p>{currentLink.link_levels.toString()}</p>
      <p>{currentLink.name.toString()}</p>
      <p>{currentLink.unlock_conditions.toString()}</p>
      <p>{currentLink.unlock_conditions.toString()}</p>
    </>
  );
};

export default SocialLinkRoute;
