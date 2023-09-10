
import React from "react";
import './contact.css'
export default function Contact()
{
    return (<>
            <div className="contact-us mt-3 mb-5 bg-light" id="contactus">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="headline text-center mt-5">
                        <h3 className="position-relative mb-2 inline-block">CONTACT US</h3>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 mt-5">
                    <h4>Contact info</h4>
                    <div className="d-flex gap-2 contact-info mt-5">
                        <span><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                        <a href="/" className="text-decoration-none">More Vasti, Chikhali, Pune Maharashtra - 411062</a>
                    </div>
                    <div className="d-flex gap-2 contact-info">
                        <span><i className="fa-solid fa-mobile-screen-button"></i></span>
                        <a href="/" className="text-decoration-none">+91 9795592502</a>
                    </div>
                    <div className="d-flex gap-2 contact-info">
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <a href="/" className="text-decoration-none">vaibhavsatras5@gmail.com</a>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 mt-5">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group form-info shadow">
                                    <div className="input-group form-detail">
                                        <div className="input-group-text">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter Name" id="name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group form-info shadow">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Emai Address"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group form-info">
                                    <textarea cols="10" rows="5" className="form-control shadow"
                                        placeholder="Enter Your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group form-info">
                                    <button type="button" className="btn btn-danger"><i
                                            className="fa-regular fa-paper-plane me-2"></i>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

    </>)
}