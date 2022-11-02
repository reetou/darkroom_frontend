import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const Container = styled.div`
  background-color: black;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 1200px) {
    padding: unset;
    max-width: 1024px;
  }

  @media (min-width: 1400px) {
    max-width: 1260px;
  }
`;

type Props = {
  navbarTitle: string;
  children: ReactNode;
};

export function PageContainer(props: Props) {
  return (
    <Container>
      <Navbar backgroundColor="yellow" title={props.navbarTitle} logoUrl="" />
      <ContentContainer>
        <Content>{props.children}</Content>
      </ContentContainer>
    </Container>
  );
}
