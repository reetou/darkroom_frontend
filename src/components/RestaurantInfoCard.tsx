import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

type Props = {
  address_city: string;
  address: string;
  name: string;
  phone: string;
  book_url?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 254px;
  align-items: flex-start;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 7px;
  margin-bottom: 20px;
`;

const ReviewButton = styled.button`
  background: #3d7bf6;
  border-radius: 5px;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #ffffff;
  padding: 12px 18px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export function RestaurantInfoCard(props: Props) {
  return (
    <Container>
      <Title>{props.name}</Title>
      <RatingContainer>
        <div>4.8</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
      </RatingContainer>
      <ReviewButton>Write a review</ReviewButton>
      <AddressContainer>
        <div>{props.address}</div>
        <div>{props.address_city}</div>
        <div>{props.phone}</div>
      </AddressContainer>
      <Button
        backgroundColor="transparent"
        borderColor="white"
        text="Book a table"
        textColor="white"
        block
      />
      <div style={{ marginBottom: 62 }} />
    </Container>
  );
}
