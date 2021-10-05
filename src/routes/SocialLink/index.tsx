import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { arcanasArray } from "../../utils/arcanas";
import p3data from "../../data/p3";
import p4data from "../../data/p4";
import {
  BaseCard,
  Image,
  InnerCard,
  TitleWrapper,
  ImageWrapper,
  RankWrapper,
  Spacer,
} from "./styles";
import { Games } from "../../enums/games";
import LinkRank from "../../components/LinkRank";

interface PathProps {
  arcana: string;
  game: string;
}

const dataMap = {
  [Games.p3.valueOf()]: p3data,
  [Games.p4.valueOf()]: p4data,
};

const SocialLink: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const params = match.params as PathProps;
  const gameData = dataMap[params.game] || {};
  const arcanas = arcanasArray();
  const data = Object.values(gameData);
  const currentArcana = arcanas.find((arcana) => arcana.key === params.arcana);
  const currentLink = data.find((d) => d.arcana === currentArcana?.value);
  const redirect = !gameData || !currentArcana || !currentLink;

  useEffect(() => {
    if (redirect) history.push(`/${params.game}`);
  }, [history, redirect, params.game]);

  if (redirect) return null;

  const levels = currentLink.link_levels;

  return (
    <BaseCard>
      <TitleWrapper>
        <p>{currentLink.name.toString()}</p>

        <Spacer />

        <p>{currentLink.arcana.toString()}</p>
      </TitleWrapper>

      <InnerCard>
        <ImageWrapper>
          <Image src={currentLink.image} />
        </ImageWrapper>

        <div>
          <RankWrapper>
            <LinkRank title="Rank 1" content={levels.first} />
            <LinkRank title="Rank 2" content={levels.second} />
            <LinkRank title="Rank 3" content={levels.third} />
            <LinkRank title="Rank 4" content={levels.fourth} />
            <LinkRank title="Rank 5" content={levels.fifth} />
            <LinkRank title="Rank 6" content={levels.sixth} />
            <LinkRank title="Rank 7" content={levels.seventh} />
            <LinkRank title="Rank 8" content={levels.eighth} />
            <LinkRank title="Rank 9" content={levels.ninth} />
            <LinkRank title="Rank 10" content={levels.tenth} />
          </RankWrapper>

          <p>{currentLink.unlock_conditions.toString()}</p>
        </div>
      </InnerCard>
    </BaseCard>
  );
};

export default SocialLink;
