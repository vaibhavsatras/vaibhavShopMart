import React, { useEffect, useState } from 'react';
import Data from '../Data/data';

import './products.css'
// import img1_1 from '../../assets/images/p-1-2.jpg';
// import img1_2 from '../../assets/images/p-3-1.jpg';
// import img2_1 from '../../assets/images/p-2-2.jpg';
// import img2_2 from '../../assets/images/p-2-1.jpg';
// import img3_1 from '../../assets/images/p-1-1.jpg';
// import img3_2 from '../../assets/images/p-3-2.jpg';
// import img4_1 from '../../assets/images/p-4-1.jpg';
// import img4_2 from '../../assets/images/p-4-2.jpg';
// import img5_1 from '../../assets/images/p-5-2.jpg';
// import img5_2 from '../../assets/images/p-5-1.jpg';
// import img6_1 from '../../assets/images/p-6-1.jpg';
// import img6_2 from '../../assets/images/p-6-2.jpg';
import img3 from '../../assets/images/img3.jpeg'


export default function Products()
{
    const[data,setData] =  useState([])
    useEffect(()=>{

        setData(Data)
    },[]);
    console.log(data);

    return (<>
    <div className="products" id="products">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="headline text-center mt-4">
                    <h3 className="position-relative mb-2 inline-block">Products</h3>
                </div>
            </div>
        </div>
        <div className="row">

            {
                data.map((item)=>{

                    return(<>

                <div className="col-lg-4">
                <a href="/" className="d-block text-center mb-4">
                    <div className="product-list">
                        <div className="product-image position-relative">
                            {/* <span className="sale">Sale</span> */}
                            <br/>
                            <div className="images">
                            <img src={item.img1} alt="jpg" className="img-fluid first-image"/>
                            <img src={item.img2} alt="jpg" className="img-fluid second-image"/>
                            </div>
                        </div>
                        <div className="poduct-details pt-2">
                            <h3 className="text-capitalize">{item.title}</h3>
                            <p className="amount">Rs.400.00 <del>Rs.580.00</del></p>
                            <div className="py-1">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <button type="button" className="add-cart">Add To Cart</button>
                        </div>
                    </div>
                </a>
            </div>
                    </>)
                })
            }
            

        </div>
        </div>
</div>
<div className="up-to pt-5 pb-5 ">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="upto-off position-relative rounded">
                        <img src={img3} alt="img" className="img-fluid"/>
                        <div className="up-to-content">
                            <h3 className="heading">Up To 30% Off</h3>
                            <p>Hurry Up Offer is only for Limited Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>)

}