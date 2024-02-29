import React from 'react'
import './homebanner.css'

const HomeBanner = () => {
  return (
    <div className='HomeBanner'>
      <div className="BannerText">
          <h1>Shopping Simplified, <br /> Happiness Delivered</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere numquam, eligendi molestiae vel officiis laborum!</p>
          <div className="BannerButton">
            <p>EXPLORE NOW</p>
          </div>
      </div>
      <img src="https://media.istockphoto.com/id/178487234/photo/green-microchip-set-in-a-blue-printed-circuit-board.jpg?s=612x612&w=0&k=20&c=R9Wq5wUMQCNT4AyK9oT56Ji7rlfmT_6HCMfqA8fulNc=" alt="banner Image" />
    </div>
  )
}

export default HomeBanner