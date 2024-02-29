import React from 'react'
import './FeaturedProducts.css'


const Card = () => {
    return(
        <div className="featuredCard">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEXu7u6Wlpbx8fGTk5OQkJC9vb3V1dXZ2dn09PSrq6vl5eXBwcGNjY2enp7n5+fc3NzIyMi4uLilpaXPz8+ysrKsrKzuECsBAAABtElEQVR4nO3a4W6iQACFURlGOxW11Xbf/1UX0FZbYeNs0t0Zcs5PzE38ArFgXa0AAAAAAAAAAAAAAAAAAAAAAABgMULvLya5m/8nvHbdeps32XRdt6kmMcS23eW93XSKbVzXUhheYtPEvMLQT9p6Crs2tzA8VVWY9k124bGtqHC8SHOv0j6wnsJ0anMLU1dTYeqGU5hVeD7rlRSGS2BGYUib86T4whBS2r42bfN4YX8bkw5vp3Ng+YXr9+cmXvoeKwzdsZ98bkovPOzaz7xHC/dfJsUXxqbJLvwyqb8wfH9+qK2wv0rPZgrDenC8eeYYrtKbTfGFp+eL03RhikPK7ul6PLx/TH5V8Rc/XKSZu7Y0nqh4U3idpFhD4YfxOeGxwutGYVEULrjw7rP0ZrOIwtANpr+DW0bh/T3NzUvLKPzTRmFRFE5uFBZF4eRGYVEUTm4UFkXh5EZhURRObhQWReHkRmFRZgvTaHqziMK0H71MbpZRuPzvvBUqLIbCJRTuYoz3v4JOw+E489+1cXKspHC12g5mDs/8wH186fCzbwsAAAAAAAAAAAAAAAAAAAAAAAD+qd+8KxEfo0qW7AAAAABJRU5ErkJggg==" alt="product card" />
            <div className="CardDetails">
                <h3>PRODUCT NAME</h3>
                <h5>PRICE</h5>
                <p>ADD TO CART</p>
            </div>
        </div>
    )
}


const FeaturedProducts = () => {
  return (
    <div className="featuredProducts">
        <h1>FEATURED PRODUCTS</h1>
        <div className="featuredCards">
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
        </div>
    </div>
  )
}

export default FeaturedProducts