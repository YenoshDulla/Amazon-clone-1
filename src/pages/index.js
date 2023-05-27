import Head from 'next/head';
import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed'
function Home({data}) {
  return (
    <div>
      <Head>
        <title>Amazon-clone-1</title>
        <link rel="icon"  href="/amazon.svg" />
      </Head>
    {/* Header */}
    <Header/>
    {/* main */}
    <main className='max-w-fit'>
      <Banner/>
      <ProductFeed products={data}/>
    </main>
    </div>
  )
}
export async function getServerSideProps() {

  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return { props: { data } };
}
 

export default Home;