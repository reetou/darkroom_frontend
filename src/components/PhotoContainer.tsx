import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 800px;
    height: 600px;
    margin-right: 20px;
    img {
      max-height: inherit;
    }
  }
`;

type Props = {
  children: ReactNode;
};

export function PhotoContainer(props: Props) {
  return <Container>{props.children}</Container>;
}
