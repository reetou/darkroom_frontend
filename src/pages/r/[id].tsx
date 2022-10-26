import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { AdditionalPhotos } from "../../components/AdditionalPhotos";
import { Navbar } from "../../components/Navbar";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";
import { DarkroomPhoto } from "../../types/photo";
import { DarkroomRestaurant } from "../../types/restaurant";

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
`;

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
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
                <img
                  style={{ height: "inherit" }}
                  src={props.primary_photo.url}
                />
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
    return {
      props: {
        restaurant: r,
        primary_photo: photo,
        photos: [photo, photo, photo, photo, photo, photo],
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
