import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

type Props = {
  children: ReactNode;
};

export function PhotoWrapper(props: Props) {
  return <Container>{props.children}</Container>;
}
