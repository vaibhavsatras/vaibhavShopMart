import React from "react"
import './testimonials.css'
import test1 from '../../assets/images/testi1.jpg'
import test2 from '../../assets/images/testi2.jpg'
import test3 from '../../assets/images/testi3.jpg'

export default function Testimonials()
{
    return (
    <>
            <div className="testimonials" id="testimonial">
        <div className="container">
            <div className="col-lg-12">
                <div className="headline text-center mt-5">
                    <h3 className="position-relative mb-2 inline-block">TESTIMONIALS</h3>
                </div>
            </div>

            <div className="col-12 mt-5 mb-5">
                <div className="carousel slide banner  overflow-hidden" data-bs-ride="carousel" id="testi">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="testi-container">
                                <div className="row">
                                    <div className="col-12 testi-image">
                                        <img src={test1} alt="img" className="img-fluid"/>

                                    </div>
                                    <div className="testi-content position-relative">
                                        <h4>Manish Malhotra</h4>
                                        <h3 className="text-uppercase">Khaab Bridal Couture</h3>
                                        <div className="paragraph">
                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 24 24" className="position-absolute svgicon-1">
                                                    <path
                                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                                </svg>
                                                Manish's vast portfolio includes big-budget, big-banner, and mainstream
                                                Bollywood movies like <br/> Dil to Pagal Hain, Judaai, Dilwale Dulhania
                                                Le
                                                Jayenge, and many others. <br/>Manish malhotra who is the most popular
                                                fashion designer in current fashion industry.</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                viewBox="0 0 24 24" className="position-absolute svgicon2-1">
                                                <path
                                                    d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="testi-container">
                                <div className="row">
                                    <div className="col-12 testi-image">
                                        <img src={test2} alt="img" className="img-fluid"/>

                                    </div>
                                    <div className="testi-content position-relative">
                                        <h4>Neeta Lulla</h4>
                                        <h3>THE BRAND</h3>
                                        <div className="paragraph">
                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 24 24" className="position-absolute svgicon-2">
                                                    <path
                                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                                </svg>
                                                Neeta Lulla is another name you must have encountered while reading
                                                fashion
                                                magazines,<br/> news, or updates. This incredibly talented designer has
                                                been
                                                in
                                                the fashion industry <br/>for over three and a half decades.</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                viewBox="0 0 24 24" className="position-absolute svgicon2-2">
                                                <path
                                                    d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="testi-container">
                                <div className="row">
                                    <div className="col-12 testi-image">
                                        <img src={test3} alt="img" className="img-fluid"/>

                                    </div>
                                    <div className="testi-content position-relative">
                                        <h4>Anita Dongre</h4>
                                        <h3>ONLY BRAND</h3>
                                        <div className="paragraph">
                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 24 24" className="position-absolute svgicon-3">
                                                    <path
                                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                                </svg>
                                                Have you been fascinated by the outfits of Katrina Kaif, Alia Bhatt, or
                                                Kriti
                                                Sanon? <br/>Then one of the talents behind those attires is Anita Dongre.
                                                <b/> Anita
                                                is another inspiring fashion designer and entrepreneur.
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                viewBox="0 0 24 24" className="position-absolute svgicon2-3">
                                                <path
                                                    d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <button data-bs-target="#testi" className="carousel-control-prev cr-slider" data-bs-slide="prev">

                        <i className="fa-solid fa-chevron-left text-dark fs-3"></i>
                        {/* <!-- <span className="carousel-control-prev-icon cr-slider text-dark"></span> --> */}
                    </button>
                    <button data-bs-target="#testi" className="carousel-control-next" data-bs-slide="next">
                        <i className="fa-solid fa-chevron-right text-dark fs-3"></i>
                        {/* <!-- <span className="carousel-control-next-icon cr-slider"></span> --> */}
                    </button>
                    <ul className="carousel-indicators">
                        <li data-bs-target="#testi" data-bs-slide-to="0" className="active bg-dark"></li>
                        <li data-bs-target="#testi" data-bs-slide-to="1" className="bg-dark"></li>
                        <li data-bs-target="#testi" data-bs-slide-to="2" className="bg-dark"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    </>)
}