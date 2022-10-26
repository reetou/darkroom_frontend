import React from "react";
import styled from "styled-components";
import { DarkroomPhoto } from "../types/photo";

type Props = {
  photos: DarkroomPhoto[];
  onSelect: (v: DarkroomPhoto) => void;
  selected: DarkroomPhoto[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const PhotosContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.75fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
`;

const PhotoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PriceTag = styled.div`
  position: absolute;
  top: 11px;
  right: 13px;
  border-radius: 20px;
  background-color: white;
  color: black;
  padding: 7px 15px;

  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  min-width: 60px;
  text-align: center;
`;

const PhotoItem = styled.img`
  max-height: 170px;
`;

export function AdditionalPhotos(props: Props) {
  return (
    <Container>
      <Title>We have additional photos of you</Title>
      <PhotosContainer>
        {props.photos.slice(0, 4).map((p) => (
          <PhotoItemContainer key={p.id}>
            <PhotoItem src={p.url} />
            <PriceTag>
              {p.price} {p.currency}
            </PriceTag>
          </PhotoItemContainer>
        ))}
      </PhotosContainer>
    </Container>
  );
}