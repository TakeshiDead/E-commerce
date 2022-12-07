import React from 'react'

import{Product,FooterBanner, HeroBanner} from '../components'

 const Home = () => {
  return (
    <>
    //* This is where I ended last time ONiel */
    <HeroBanner />

    <div className='products-heading'>
      <h2>beset Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {['Product 1','Product 2',].map(
      (product) => product) }
    </div>

    <FooterBanner />
    </>
  )
}
export default Home