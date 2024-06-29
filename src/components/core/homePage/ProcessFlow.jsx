import React from 'react'
// import image;
const ProcessFlow = () => {
    return (
        <div>
            <section class="section">
                <div class="container mt-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="section-title me-5">
                                <h3 class="title">How to sell your Device</h3>
                                <p class="text-muted">Process of selling your device</p>
                                <div class="process-menu nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                        href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                                        aria-selected="true">
                                        <div class="d-flex">
                                            <div class="number flex-shrink-0">
                                                1
                                            </div>
                                            <div class="flex-grow-1 text-start ms-3">
                                                <h5 class="fs-18">Login</h5>
                                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quia.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false">
                                        <div class="d-flex">
                                            <div class="number flex-shrink-0">
                                                2
                                            </div>
                                            <div class="flex-grow-1 text-start ms-3">
                                                <h5 class="fs-18">Give description about your device</h5>
                                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, esse!</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                        aria-selected="false">
                                        <div class=" d-flex">
                                            <div class="number flex-shrink-0">
                                                3
                                            </div>
                                            <div class="flex-grow-1 text-start ms-3">
                                                <h5 class="fs-18">Choose delievery point</h5>
                                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, ratione.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                    aria-labelledby="v-pills-home-tab">
                                    {/* <img src={} alt="..." class="img-fluid" /> */}
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab">
                                    {/* <img src={} alt="..." class="img-fluid" /> */}
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                    aria-labelledby="v-pills-messages-tab">
                                    {/* <img src={} alt="..." class="img-fluid" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProcessFlow
