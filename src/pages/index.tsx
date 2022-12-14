import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { AdditionalPhotos } from "../components/AdditionalPhotos";
import { Navbar } from "../components/Navbar";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { DarkroomPhoto } from "../types/photo";

const Container = styled.div`
  background-color: black;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
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

const Home: NextPage = () => {
  const photo: DarkroomPhoto = {
    price: "1",
    id: "someid1",
    url: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InE2ZzRsMTV2a3c2MjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.u977tyhelM96uofm43cNhBBuAu4dPmPBn3HNLoBT4vA/image;s=1080x720",
    currency: "$",
  };
  return (
    <div>
      <Head>
        <title>Darkroom App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar backgroundColor="yellow" title={`Darkroom`} logoUrl="" />
        <ContentContainer>
          <h1>Restaurant not selected</h1>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default Home;
