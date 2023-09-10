
import img3 from '../../assets/images/p-3-1.jpg'
import React, { useRef } from 'react'
import './special.css'
import Data from '../Data/data'

export default function Special()
{   

let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
    
let counterInfo = ()=> {
   const future_date = new Date('20 September 2023')
    const curr_date = new Date();

   const date  = future_date  - curr_date;
    
    let d = Math.floor(date / 1000 / 60 / 60 / 24);
    let h = Math.floor(date / 1000 / 60 / 60) % 24;
    let m = Math.floor(date / 1000 / 60) % 60;
    let s = Math.floor(date / 1000) % 60;

    day.textContent = d
    hour.textContent  = h
    minutes.textContent = m;
    second.textContent = s;
    
    
}

counterInfo();

setInterval(counterInfo,1000);



    return (<>

<div className="spaecial-container my-4 mb-4">
        <div className="container my-3">
            <div className="row">
                <div className="col-lg-12">
                    <div className="headline text-center mt-5">
                        <h3 className="position-relative mb-2 inline-block">SPECIAL OFFER</h3>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12 mt-4">
                    <div className="special-offer">
                        <h5>Sexy Women Floral Embrodary</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Dolorem
                            exercitationem eum eligendi laborum sunt iste sequi expedita incidunt atque
                            reiciendis.</p>
                        <ul className="counter-container list-unstyled mt-5">
                            <li><span className="d-block fs-5" id="day">00</span>Day</li>
                            <li><span className="d-block fs-5" id="hour">00</span>Hrs</li>
                            <li><span className="d-block fs-5" id="minutes">00</span>Min</li>
                            <li><span className="d-block fs-5" id="second">00</span>Sec</li>
                        </ul>

                        <span className="d-block counter-price d-block h4">Rs.400 <del>Rs.500</del></span>
                        <button className="btn btn-outline-danger">Add To Cart</button>
                    </div>
                </div>

                <div className="col-lg-5 col-sm-12 mt-5 text-end">
                    <div className="speceial-offer-img position-relative">
                        <span className="badge bg-danger special-sale text-uppercase">Sale</span>
                        <div className="special-image">
                            <img src={Data[1].img1} alt="img" className="img-fluid rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    </>)
}