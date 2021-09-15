import React from "react";
import { Link } from "react-router-dom";
import { tryGetArcanaKeyByValue } from "../../utils/arcanas";
import { Background, ImageArea, InfoArea, Text, Image } from "./styles";

interface CardProps {
  name: string;
  arcana: string;
  imagePath: string;
  game: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link to={`/${props.game}/${tryGetArcanaKeyByValue(props.arcana)}`}>
      <Background>
        <ImageArea>
          <Image src={props.imagePath} />
        </ImageArea>

        <InfoArea>
          <Text>{props.name}</Text>

          <Text>{props.arcana}</Text>
        </InfoArea>
      </Background>
    </Link>
  );
};

export default Card;
