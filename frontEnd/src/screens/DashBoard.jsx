import React from 'react'
import './dashboard.css'

const DashBoard = () => {
  return (
    <div >
        <div className='dash-head' >
            <h1>Company name</h1>
            <ul>
                <li>Home</li>
                <li>Logout</li>
            </ul>
        </div>
        <div className="dash-content">
            <div className="left">
                nav Links
            </div>
            <div className="right">
                content
            </div>
        </div>
    </div>
  )
}

export default DashBoard