import React from "react";
import styled from "styled-components";

type Props = {
  backgroundColor: string;
  title: string;
  logoUrl: string;
};

const Container = styled.div`
  display: flex;
  height: 119px;
  align-items: center;
  justify-content: center;
  padding: 0 91px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 25px;
  line-height: 42px;
`;

export function Navbar(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
}
