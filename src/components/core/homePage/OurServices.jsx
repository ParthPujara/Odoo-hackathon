import React from 'react'
import img from '../images/our-services.png'
import img2 from '../images/our-services2.png'
import img3 from '../images/our-services3.png'
import img4 from '../images/our-services4.png'
const OurServices = () => {
    return (
        <div>
            <div className="container-fluid our-services px-md-5" style={{padding: '0 30px' }}>
                <h2 style={{ paddingTop: '40px' }}>Our Services
                    <div className="line"></div>
                </h2>
                <div className="row d-flex justify-content-center flex-md-nowrap mt-5" style={{ borderRadius: '5px', }}>
                    <div className="col-md-3 card mx-2" style={{ border: '0', padding: '15px 5px'}}>
                        <div className="our-services-icon mx-auto pt-3" style={{marginBottom: '-10px'}}>
                            <img src={img} className="card-img-top" alt="..." height={150}/>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center" style={{margin: '10px 0'}}>Sell Used Laptop</h5>
                            <p className="card-text" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card" style={{ border: '0', padding: '15px 5px'}}>
                        <div className="our-services-icon mx-auto pt-3" style={{marginBottom: '-10px'}}>
                            <img src={img2} className="card-img-top" alt="..." height={150}/>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center" style={{margin: '10px 0'}}>Repair My Laptop</h5>
                            <p className="card-text" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card mx-2" style={{ border: '0', padding: '15px 5px'}}>
                        <div className="our-services-icon mx-auto pt-3" style={{marginBottom: '-10px'}}>
                            <img src={img3} className="card-img-top" alt="..." height={150}/>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center" style={{margin: '10px 0'}}>Rent A Laptop</h5>
                            <p className="card-text" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card" style={{ border: '0', padding: '15px 5px'}}>
                        <div className="our-services-icon mx-auto pt-3" style={{marginBottom: '-10px'}}>
                            <img src={img4} className="card-img-top" alt="..." height={150}/>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center" style={{margin: '10px 0'}}>Buy Refurbished Laptop</h5>
                            <p className="card-text" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurServices
