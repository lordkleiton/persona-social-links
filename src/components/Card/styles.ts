import styled from "styled-components";

const borderRadius = "0.5rem";

export const Background = styled.div`
  border-style: double;
  border-color: #000;
  width: 10rem;
  height: 10rem;
  border-radius: ${borderRadius};
  margin: 1rem;
`;

export const ImageArea = styled.div`
  height: 7rem;
  border-radius: ${borderRadius} ${borderRadius} 0 0;
`;

export const Image = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const InfoArea = styled.div`
  height: 3rem;
  border-top-style: solid;
  border-width: thin;
  border-radius: 0 0 ${borderRadius} ${borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Text = styled.p`
  text-align: center;
`;
