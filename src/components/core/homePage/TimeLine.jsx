import React from 'react'
import sellIcon from '../images/sell.png'
import locationIcon from '../images/location.png'
import payIcon from '../images/pay.png'

const TimeLine = () => {
    return (
        <div className='container-fluid timeline mt-3 px-md-5 py-5' style={{background: '#f2f2f2', padding: '0 25px',  }}>
            <div className="row d-flex flex-wrap">
                <h2 style={{ paddingTop: '10px' }}>How We Work
                    <div className="line"></div>
                </h2>
                <div className="col-md-4">
                    <div className="card">
                        <div className='img'><img src={sellIcon} className="card-img-top" alt="..." /></div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className='img'><img src={locationIcon} className="card-img-top" alt="..." /></div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className='img'><img src={payIcon} className="card-img-top" alt="..." style={{width: '45px'}}/></div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine



{/* <div className="info-timeline">
    <ul>
        <li><span className="timeline-circle">1</span>example 1</li>
        <li><span className="timeline-circle">2</span>example 2</li>
        <li><span className="timeline-circle">3</span>example 3</li>
    </ul>
</div> */}



// #8400ff