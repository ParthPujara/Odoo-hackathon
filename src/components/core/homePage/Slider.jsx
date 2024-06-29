import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../City.json'
import $ from 'jquery';

const Slider = () => {


    return (
        <>

            <div className='slider' >
                <OwlCarousel items={1}
                    className="owl-theme h-20"
                    autoplay={true}
                    autoplayTimeout={2500}
                    loop
                    dots={false}
                    margin={0} >
                    <div><img className="img h-80 object-cover" src={"https://img.freepik.com/free-photo/laptop-with-blank-screen-yellow-background_185193-86628.jpg?w=740&t=st=1662035345~exp=1662035945~hmac=6b74f7a98a3536ad57e114f15f36abacd4ca205f3cb88729a24bb2769cfd061a"} alt="image" /></div>
                    <div><img className="img h-80 object-cover" src={"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"} alt="image" /></div>
                    <div><img className="img h-80 object-cover" src={"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"} alt="image" /></div>
                </OwlCarousel>
            </div>

        </>
    )
}

export default Slider


