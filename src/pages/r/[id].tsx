import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import { AdditionalPhotos } from "../../components/AdditionalPhotos";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";
import { DarkroomPhoto } from "../../types/photo";
import { DarkroomRestaurant } from "../../types/restaurant";
import axios from "axios";
import { useState } from "react";
import { API_URL, NEXT_API_URL } from "../../constants";

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
  width: 800px;
  height: 600px;
  background-color: black;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    max-height: inherit;
  }
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
        `${API_URL}/api/v1/darkroom/stripe/session/${props.primary_photo.id}`
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
                    text={`Download for ${primary.currency}${primary.price}`}
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
              showPrices
              loading={loading}
              onClick={(p) => {
                setPrimary(p);
                Router.replace(`/r/${p.id}`, undefined, {
                  shallow: true,
                });
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
    address: "Address",
    address_city: "New York",
    phone: "+1 12313123123",
    book_url: "https://google.com",
  };

  const photo: DarkroomPhoto = {
    price: "1",
    id: "someid1",
    url: "",
    currency: "$",
  };

  try {
    const split = context.req.url?.split("/") ?? [];

    const photo_id = split[split.length - 1].split(".")[0];

    const res = await axios.get(`${NEXT_API_URL}/api/photos/${photo_id}`);

    return {
      props: {
        restaurant: res.data.restaurant,
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
