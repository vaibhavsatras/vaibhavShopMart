
import React from 'react';
import './banner.css'
function Banner()
{
    return (
    <>
<section className="carousel slide banner  overflow-hidden" data-bs-ride="carousel" id="slider">

<div className="carousel-inner">
    <div className="carousel-item active">
        <div className="home-banner banner-1">
            <div className="banner-text">
                <h1>Woomen</h1>
                <h2>50% Discount For This Season</h2>
                <a href="#" className="btn btn-outline-danger  mt-4">Our product</a>
            </div>

        </div>

    </div>
    <div className="carousel-item">
        <div className="home-banner banner-2">
            <div className="banner-text">
                <h1>Woomen</h1>
                <h2>50% Discount For This Season</h2>
                <a href="#" className="btn btn-outline-danger mt-4">Our Product</a>
            </div>

        </div>
    </div>
    <div className="carousel-item">

        <div className="home-banner banner-3">
            <div className="banner-text">
                <h1>Woomen</h1>
                <h2>50% Discount For This Season</h2>
                <a href="#" className="btn btn-outline-danger mt-4">Our product</a>
            </div>

        </div>

    </div>
</div>
<button data-bs-target="#slider" className="carousel-control-prev cr-slider" data-bs-slide="prev">
    <i className="fa-solid fa-chevron-left text-dark fs-3"></i>
</button>
<button data-bs-target="#slider" className="carousel-control-next icon1" data-bs-slide="next">
    <i className="fa-solid fa-chevron-right text-dark fs-3"></i>

    
</button>


<ul className="carousel-indicators">
    <li data-bs-target="#slider" data-bs-slide-to="0" className="active bg-dark"></li>
    <li data-bs-target="#slider" data-bs-slide-to="1" className="bg-dark"></li>
    <li data-bs-target="#slider" data-bs-slide-to="2" className="bg-dark"></li>
</ul>
</section>
    </>)
}
export default Banner;