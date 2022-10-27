import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
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
  top: 20px;
  right: 20px;
`;

const PurchaseContainer = styled.div`
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

  const onPayAll = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/api/v1/darkroom/stripe/session/${props.primary_photo.id}?all=1`
      );
      window.location.href = res.data.redirect_url;
    } catch (e) {
      console.error("Cannot create stripe session", e);
    } finally {
      setLoading(false);
    }
  };

  async function downloadImage(photo: DarkroomPhoto) {
    const image = await fetch(photo.url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = `${photo.id}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const isPurchased =
    primary.id === props.primary_photo.id ||
    props.product_type === "all_photos";

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
                {isPurchased ? (
                  <DownloadContainer>
                    {/* <Link href={primary.url} download target="_blank">
                      Download
                    </Link> */}

                    <Button
                      backgroundColor="white"
                      textColor="black"
                      borderColor="white"
                      text="Download"
                      onClick={() => {
                        downloadImage(primary);
                      }}
                    />
                  </DownloadContainer>
                ) : null}
                <PurchaseContainer>
                  <Button
                    backgroundColor="white"
                    textColor="black"
                    borderColor="white"
                    text={
                      isPurchased
                        ? `Get all others for just $10`
                        : `Download for ${primary.currency}${primary.price}`
                    }
                    onClick={isPurchased ? onPayAll : onPay}
                    disabled={loading}
                  />
                </PurchaseContainer>
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
              showPrices
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

    const order_id = split[split.length - 1].split(".")[0];

    const res = await axios.get(`${NEXT_API_URL}/api/orders/${order_id}`);

    return {
      props: {
        order_id: res.data.order_id,
        product_type: res.data.product_type,
        restaurant: r,
        primary_photo: res.data.primary_photo,
        photos: res.data.photos,
      },
    };
  } catch (e) {
    console.error("Could not get data", e);
    return {
      props: {
        order_id: "1",
        product_type: "single_photo",
        restaurant: r,
        primary_photo: photo,
        photos: [],
      },
    };
  }
}

export default Home;
