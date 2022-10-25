import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'


const Container = styled.div`
  background-color: red;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Darkroom App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        Yoy
      </Container>
    </div>
  )
}

export default Home
