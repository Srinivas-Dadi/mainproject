import React from 'react'
import HomeNav from '../Components/website/HomeNav/HomeNav'
import HomeBanner from '../Components/website/HomeBanner/HomeBanner'
import FeaturedProducts from '../Components/website/FeaturedProducts/FeaturedProducts'


const Website = () => {
  return (
    <div>
      <HomeNav />
      <HomeBanner />
      <FeaturedProducts />
    </div>
  )
}

export default Website