import React from "react";
import { Link } from "react-router-dom";
import { Background, ImageArea, InfoArea, Text, Image } from "./styles";

interface CardProps {
  name: string;
  arcana: string;
  imagePath: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Background>
      <ImageArea>
        <Image src={props.imagePath} />
      </ImageArea>

      <InfoArea>
        <Text>{props.name}</Text>

        <Text>{props.arcana}</Text>
      </InfoArea>
    </Background>
  );
};

export default Card;
