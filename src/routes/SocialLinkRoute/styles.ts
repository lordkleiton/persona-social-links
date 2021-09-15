import styled from "styled-components";

export const BaseCard = styled.div`
  display: flex;
  border: double;
  border-radius: 0.5rem;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  margin: 1rem auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  display: block;
  object-fit: scale-down;
  margin: auto;
  max-height: 25rem;
  max-width: 25rem;

  @media (max-width: 480px) {
    max-height: 30vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const RankWrapper = styled.div`
  margin-left: 1rem;
`;
