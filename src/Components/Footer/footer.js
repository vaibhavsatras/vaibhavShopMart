
import React from "react"
import './footer.css';

export default function Footer()
{
    return (<>
            <footer className="footer1">
        <div className="container">
            <div className="">
                <div className="row footer-content">
                    <div className="col-6 footer-text mt-1 p-0">
                        <h3>Copyright@vbs.infosystems</h3>
                    </div>
                    <div className="col-md-6 col-lg-6 footer-list mt-1 p-0">
                        <ul className="d-flex list-unstyled">
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>)
}