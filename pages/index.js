import Head from 'next/head'
import HomeNavigation from '/components/Home/HomeNavigation'
import Paths from '/components/Home/Paths'




const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeNavigation />
      <Paths />
    </>
  )
}

export default Home