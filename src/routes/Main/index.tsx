import React from "react";
import Card from "../../components/Card";
import p3data from "../../data/p3";
import { Background } from "./styles";

const Main: React.FC = () => {
  const p3 = Object.values(p3data);

  return (
    <Background>
      {p3.map((link) => (
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

export default Main;
