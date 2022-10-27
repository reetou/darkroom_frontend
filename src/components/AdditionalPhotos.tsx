import React from "react";
import styled from "styled-components";
import { DarkroomPhoto } from "../types/photo";

type Props = {
  photos: DarkroomPhoto[];
  onSelect: (v: DarkroomPhoto) => void;
  selected: DarkroomPhoto[];
  onClick: (v: DarkroomPhoto) => void;
  loading: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const PhotosContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.5fr;
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
  cursor: pointer;
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
  cursor: pointer;
`;

const PhotoItem = styled.img`
  max-height: 170px;
`;

const OtherPhotosContainer = styled.div`
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
`;

export function AdditionalPhotos(props: Props) {
  return (
    <Container>
      <Title>We have additional photos of you</Title>
      <PhotosContainer>
        {props.photos.slice(0, 4).map((p) => (
          <PhotoItemContainer
            key={p.id}
            onClick={() => {
              if (props.loading) {
                return;
              }
              props.onClick(p);
            }}
          >
            <PhotoItem src={p.url} />
            <PriceTag>
              {p.price} {p.currency}
            </PriceTag>
          </PhotoItemContainer>
        ))}
        {props.photos.length > 4 ? (
          <OtherPhotosContainer>
            {`+${props.photos.length - 4}`}
          </OtherPhotosContainer>
        ) : null}
      </PhotosContainer>
    </Container>
  );
}
