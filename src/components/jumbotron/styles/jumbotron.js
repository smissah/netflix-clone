import styled from "styled-components/macro";

export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
// $direction -> flips the side the image is on - props

export const Container = styled.div``;

export const Item = styled.div`
  display: flex;
  border-bottom: 0.8rem solid #222;
  colour: white;
  overflow: hidden;
`;
export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
