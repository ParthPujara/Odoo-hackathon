import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonial = () => {
    const options = {
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    }
    return (
        <div className='container-fluid testimonial pb-5 px-md-5' style={{ padding: '0 25px' }}>
            <h2 style={{ paddingTop: '80px' }}>What Clients Say
                <div className="line"></div>
            </h2>
            <OwlCarousel
                className="owl-theme row justify-content-center pt-5"
                // loop
                // autoplay={true}
                // autoplayTimeout={2000}
                nav
                dots={false}
                margin={9}
                {...options}
            >
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '100%', padding: '10px', background: '#f2f2f2', border: '0' }}>
                        <div className="card-body" style={{ padding: '8px 10px' }}>
                            <p className="card-text testimonial-card-text"><i class="bi bi-quote"></i><span> Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                        </div>
                        <div className="testimonial-card-footer">
                            <div className="testimonial-profile-pic">
                                <img src={'https://imgs.search.brave.com/cjqcJ0uAqus65gdaToSbka8df0CSZs03OCa9hp5FJkw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/ZmFpcnRyYXZlbDR1/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNi9zYW1w/bGUtcHJvZmlsZS1w/aWMtMzAweDMwMC5w/bmc'} className="card-img-bottom" alt="..." />
                            </div>
                            <p className='card-title testimonial-card-title'>James Harvey
                                <p class="card-text testimonial-designation text-muted">~ Director</p>
                            </p>
                        </div>
                    </div>
                </div>
            </OwlCarousel >


            {/* <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-4 pb-2">
                                <h3 className="title mb-3">Happy Candidates</h3>
                                <p className="text-muted">Post a job to tell us about your project. We'll quickly match
                                    you with the
                                    right freelancers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="swiper testimonialSlider pb-5">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="card testi-box">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <img src="assets/images/logo/mailchimp.svg" height="50" alt=""/>
                                                </div>
                                                <p className="testi-content lead text-muted mb-4">" Very well thought
                                                    out and articulate communication.
                                                    Clear milestones, deadlines and fast work. Patience. Infinite
                                                    patience. No
                                                    shortcuts. Even if the client is being careless. "</p>
                                                <h5 className="mb-0">Jeffrey Montgomery</h5>
                                                <p className="text-muted mb-0">Product Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card testi-box">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <img src="assets/images/logo/wordpress.svg" height="50" alt=""/>
                                                </div>
                                                <p className="testi-content lead text-muted mb-4">" Very well thought
                                                    out and articulate communication.
                                                    Clear milestones, deadlines and fast work. Patience. Infinite
                                                    patience. No
                                                    shortcuts. Even if the client is being careless. "</p>
                                                <h5 className="mb-0">Rebecca Swartz</h5>
                                                <p className="text-muted mb-0">Creative Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card testi-box">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <img src="assets/images/logo/Instagram.svg" height="50" alt=""/>
                                                </div>
                                                <p className="testi-content lead text-muted mb-4">" Very well thought
                                                    out and articulate communication.
                                                    Clear milestones, deadlines and fast work. Patience. Infinite
                                                    patience. No
                                                    shortcuts. Even if the client is being careless. "</p>
                                                <h5 className="mb-0">Charles Dickens</h5>
                                                <p className="text-muted mb-0">Store Assistant</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}
        </div >
    )
}

export default Testimonial
