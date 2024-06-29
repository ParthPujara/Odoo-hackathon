import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../City.json'
import $ from 'jquery';

const Slider = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cityName, setCityName] = useState('Ahmedabad');
    const selectCity = (cityName) => {
        let sc = document.getElementById('search-city');
        sc.value = cityName;
        setCityName(cityName);
    }
    return (
        <>
            <button id='openModal' className="d-none" data-bs-toggle="modal" data-bs-target="#selectLocation">
                click
            </button>
            <div className='slider' >
                <OwlCarousel items={1}
                    className="owl-theme h-20"
                    autoplay={true}
                    autoplayTimeout={2500}
                    loop
                    dots={false}
                    margin={0} >
                    <div><img className="img" src={"https://img.freepik.com/free-photo/laptop-with-blank-screen-yellow-background_185193-86628.jpg?w=740&t=st=1662035345~exp=1662035945~hmac=6b74f7a98a3536ad57e114f15f36abacd4ca205f3cb88729a24bb2769cfd061a"} alt="image" /></div>
                    <div><img className="img" src={"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"} alt="image" /></div>
                    <div><img className="img" src={"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"} alt="image" /></div>
                </OwlCarousel>
            </div>
            <div className="city">
                <div className="select-city btn-group">
                    <button id='btn' type='button' className="btn location-btn" data-bs-toggle="modal" data-bs-target="#selectLocation"><span className='current-city'><i className="bi bi-geo-alt-fill"></i><span style={{ backgroundColor: 'transparent   ' }}>{cityName.length > 10 ? cityName.slice(0, 9) + '...' : cityName}</span></span>
                    </button>
                    <button className='btn'>
                        <div className="input-group search-box">
                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                            <input type="text" className="form-control search-item" placeholder="Search Item" aria-label="Search Item" aria-describedby="basic-addon1" />
                        </div>
                    </button>
                </div>
            </div>


            <div className="modal fade" id="selectLocation" tabIndex="-1" aria-labelledby="selectLocationLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content" style={{ height: '450px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="selectLocationLabel">Select City</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><i className="bi bi-geo-alt-fill"></i></span>
                                <input id='search-city' type="text" className="form-control" placeholder="Select City" aria-label="Select City" aria-describedby="basic-addon1" onChange={(event) => { setSearchTerm(event.target.value); }} />
                            </div>
                            <div className="cities">
                                <div className="row">
                                    {data.filter((val) => {
                                        if (searchTerm === "") {
                                            return val;
                                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val;
                                        }
                                    }).map((v, k) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 py-1" key={k}>
                                                <div className="card" style={{ cursor: 'pointer' }} onClick={() => { selectCity(v.name) }} data-bs-dismiss="modal">
                                                    <div className="card-body" style={{ padding: '10px 14px' }}>
                                                        {v.name}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" style={{ backgroundColor: 'rgb(246,237,255)', color: '#2f44ff' }} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn" style={{ backgroundColor: '#2f44ff', color: '#fff' }}>Select City</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider


