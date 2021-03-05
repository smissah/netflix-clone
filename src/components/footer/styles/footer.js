import styled from "styled-components/macro";

//   Container,
//   Row,
//   Link,
//   Column,
//   Title,
//   Break,
//   Text,

export const Container = styled.div`
display: flex;
padding: 7rem 5.6rem;
margin: ;auto;max-width: 1000px;
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
