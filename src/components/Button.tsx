import React from "react";
import styled, { css } from "styled-components";

type Props = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  text: string;
  onClick?: () => void;
  block?: boolean;
};

const Container = styled.button<Props>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  font-weight: 900;
  font-size: 25px;
  line-height: 38px;
  color: ${({ textColor }) => textColor};
  border: 4px solid ${({ borderColor }) => borderColor};
  padding: 12px 18px;
  ${({ block }) =>
    block
      ? css`
          width: 100%;
        `
      : ""}
`;

export function Button(props: Props) {
  return <Container {...props}>{props.text}</Container>;
}
