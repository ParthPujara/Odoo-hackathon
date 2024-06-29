import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
const Catagories = () => {
    return (
        <div>
            <div className="container-fluid categories px-md-5" style={{ padding: '0 30px' }}>
                <h2 style={{ paddingTop: '80px' }}>Device you wish to sell
                    <div className="line"></div>
                </h2>
                <div className="mt-5 d-flex flex-wrap justify-content-around" style={{ borderRadius: '5px' }}>
                    <Link to='/sell-laptop'>
                        <div className="card" style={{ border: '0', padding: '15px 5px', minHeight: '200px' }} onClick={() => { localStorage.setItem('deviceId',1) }}>
                            <div className="categories-icon mx-auto pt-3" style={{ marginBottom: '-10px' }}>
                                <i className="bi bi-laptop" style={{ fontSize: '45px' }}></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-center" style={{ margin: '10px 0' }}>Laptop</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to='/sell-laptop'>
                        <div className="card" style={{ border: '0', padding: '15px 5px', minHeight: '200px' }} onClick={() => { localStorage.setItem('deviceId',1) }}>
                            <div className="categories-icon mx-auto pt-3" style={{ marginBottom: '-10px' }}>
                                <i className="bi bi-laptop" style={{ fontSize: '45px' }}></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-center" style={{ margin: '10px 0' }}>Gaming Consoles</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to='/sell-laptop'>
                        <div className="card" style={{ border: '0', padding: '15px 5px', minHeight: '200px' }} onClick={() => { localStorage.setItem('deviceId',1) }}>
                            <div className="categories-icon mx-auto pt-3" style={{ marginBottom: '-10px' }}>
                                <i className="bi bi-laptop" style={{ fontSize: '45px' }}></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-center" style={{ margin: '10px 0' }}>Smart Watches</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Catagories
