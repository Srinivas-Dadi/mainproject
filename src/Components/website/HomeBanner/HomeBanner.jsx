 import React from 'react';
import homeImg from '../asserts/homeImg.png'
 import './homebanner.css'

const HomeBanner = () => {
  return (
    <div className="home-banner">
              <div className="home-bg">
                 <div className="container">
                    <div className="row justify-content-center align-items-md-center align-items-end">
                       <div className="col-md-6">
                          <div className="text-box">
                             <h1>REINVENT YOUR BUSINESS<span>!</span></h1>
                             <p>OMNICHANNEL INVENTORY MANAGEMENT SYSTEM</p>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <img className="img-fluid" src={homeImg} alt="" /> 
                       </div>
                    </div>
                 </div>
              </div>
           </div>
  )
}

export default HomeBanner;