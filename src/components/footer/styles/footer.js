import styled from "styled-components/macro";

//   Break,
//   Container,
//   Column,
//   Row,
//   Link,
//   Title,
//   Text,

export const Container = styled.div`
  display: flex;
  padding: 7rem 5.6rem;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 7rem 3rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1000px) {
    grid-template-cols: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  color: #757575;
  margin-bottom: 4rem;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  color: #757575;
  margin-bottom: 4rem;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
