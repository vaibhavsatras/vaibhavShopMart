
import React from 'react';
import './offer.css';
import offer1 from '../../assets/images/offer1.jpg'
import offer2 from '../../assets/images/offer2.jpg'
import offer3 from '../../assets/images/offer4.jpg'
import offer4 from '../../assets/images/offer3.jpg'


function Offer()
{
    return (
    <>

<div className="offers" id="offers">
        <div className="container">
            <div className="row">

                {/* <!-- First  Column --> */}

                <div className="col-lg-4 col-sm-12 m-0 mb-4">
                    <a href="/">
                        <div className="offer-box text-center position-relative">
                            <div className="offer-inner shadow-lg">
                                <div className="offer-image position-relative overflow-hidden rounded">
                                    <img src={offer1} alt="img" className="img-fluid"/>
                                    <div className="offer-overlay">
                                    </div>
                                </div>
                                <div className="offer-info">
                                    <div className="info-inner">
                                        <p className="headline-beager text-center  m-0">Sale 10%</p>
                                        <p className="offer-title1 text-center">Don't Miss The Chance</p>
                                        <button className="btn btn-outline-danger mt-2 text-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>

                {/* <!-- 2nd Column --> */}

                <div className="col-lg-4 col-sm-12 mb-4 d-flex flex-column justify-content-between">
                    <a href="/">
                        <div className="offer-box text-center position-relative mb-4 m-0">
                            <div className="offer-inner shadow-lg">
                                <div className="offer-image position-relative overflow-hidden rounded" id="img1">
                                    <img src={offer2} alt="img" className="img-thumbnail img-fluid"/>
                                    <div className="offer-overlay">
                                    </div>
                                </div>
                                <div className="offer-info offer-info-1">
                                    <div className="info-inner">
                                        <p className="headline-beager text-center  m-0">Sale 20%</p>
                                        <p className="offer-title1 text-center">Don't Miss The Chance</p>
                                        <button className="btn btn-outline-danger mt-2 text-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>

                    <a href="/">
                        <div className="offer-box text-center position-relative">
                            <div className="offer-inner shadow-lg">
                                <div className="offer-image position-relative overflow-hidden rounded" id="img2">
                                    <img src={offer3} alt="img" className="img-fluid"/>
                                    <div className="offer-overlay">
                                    </div>
                                </div>
                                <div className="offer-info  offer-info-1">
                                    <div className="info-inner">
                                        <p className="headline-beager text-center  m-0">Sale 15%</p>
                                        <p className="offer-title1 text-center">Don't Miss The Chance</p>
                                        <button className="btn btn-outline-danger mt-2 text-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>

                {/* <!-- 3rd Column --> */}
                <div className="col-lg-4 col-sm-12 m-0 mb-4">
                    <a href="/">
                        <div className="offer-box text-center position-relative">
                            <div className="offer-inner shadow-lg">
                                <div className="offer-image position-relative overflow-hidden rounded">
                                    <img src={offer4} alt="img" className="img-fluid"/>
                                    <div className="offer-overlay">
                                    </div>
                                </div>
                                <div className="offer-info">
                                    <div className="info-inner">
                                        <p className="headline-beager text-center m-0">Sale 20%</p>
                                        <p className="offer-title1 text-center ">Don't Miss The Chance</p>
                                        <button className="btn btn-outline-danger mt-2 text-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>


            </div>
        </div>
    </div>


    </>)
}
export default Offer;