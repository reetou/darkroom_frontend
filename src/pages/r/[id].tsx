import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { AdditionalPhotos } from "../../components/AdditionalPhotos";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";
import { DarkroomPhoto } from "../../types/photo";
import { DarkroomRestaurant } from "../../types/restaurant";
import axios from "axios";
import { useState } from "react";

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
  max-width: 1260px;
`;

const PhotoWrapper = styled.div`
  display: flex;
`;

const PhotoContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: black;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DownloadContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  const [primary, setPrimary] = useState<DarkroomPhoto>(props.primary_photo);
  const [loading, setLoading] = useState<boolean>(false);

  const onPay = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:4000/api/v1/darkroom/stripe/session"
      );
      window.location.href = res.data.redirect_url;
    } catch (e) {
      console.error("Cannot create stripe session", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>{props.restaurant.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar
          backgroundColor="yellow"
          title={props.restaurant.name}
          logoUrl=""
        />
        <ContentContainer>
          <Content>
            <PhotoWrapper>
              <PhotoContainer>
                <img style={{ height: "inherit" }} src={primary.url} />
                <DownloadContainer>
                  <Button
                    backgroundColor="white"
                    textColor="black"
                    borderColor="white"
                    text={`Download for ${primary.price} ${primary.currency}`}
                    onClick={onPay}
                    disabled={loading}
                  />
                </DownloadContainer>
              </PhotoContainer>
              <RestaurantInfoCard
                address={props.restaurant.address}
                address_city={props.restaurant.address_city}
                name={props.restaurant.name}
                phone={props.restaurant.phone}
                book_url={props.restaurant.book_url}
              />
            </PhotoWrapper>
            <AdditionalPhotos
              photos={props.photos}
              selected={[]}
              onSelect={() => {}}
              loading={loading}
              onClick={(p) => {
                setPrimary(p);
              }}
            />
          </Content>
        </ContentContainer>
      </Container>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const r: DarkroomRestaurant = {
    name: `Dave & Buster's`,
    alias: "dave-and-busters",
    instagram_url: "",
    address: "Some address",
    address_city: "New York",
    phone: "+1 12313123123",
    book_url: "https://google.com",
  };

  const photo: DarkroomPhoto = {
    price: "1",
    id: "someid1",
    url: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InE2ZzRsMTV2a3c2MjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.u977tyhelM96uofm43cNhBBuAu4dPmPBn3HNLoBT4vA/image;s=1080x720",
    currency: "$",
  };

  try {
    const split = context.req.url?.split("/") ?? [];

    const photo_id = split[split.length - 1];

    const res = await axios.get(`http://localhost:3000/api/photos/${photo_id}`);

    return {
      props: {
        restaurant: r,
        primary_photo: res.data.primary_photo,
        photos: res.data.photos,
      },
    };
  } catch (e) {
    console.error("Could not get data", e);
    return {
      props: {
        restaurant: r,
        primary_photo: photo,
        photos: [],
      },
    };
  }
}

export default Home;
