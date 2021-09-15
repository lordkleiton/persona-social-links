import React from "react";
import { Content, Wrapper } from "./styles";

interface LinkProps {
  title: string;
  content: string[];
}

const LinkRank: React.FC<LinkProps> = (props) => {
  if (!props.content.length) return null;

  return (
    <Wrapper>
      <div>{props.title}</div>

      <Content>
        {props.content.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </Content>
    </Wrapper>
  );
};

export default LinkRank;
