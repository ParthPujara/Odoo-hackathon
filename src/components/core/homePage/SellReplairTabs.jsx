import React from 'react'
import BootstrapSelect from 'react-bootstrap-select-dropdown';
const SellReplairTabs = () => {
    
    const handleChange = () => {
        
    }
    const options = [
        {
            "labelKey": "optionItem1",
            "value": "Option item 1"
        },
        {
            "labelKey": "optionItem2",
            "value": "Option item 2"
        },
        {
            "labelKey": "optionItem3",
            "value": "Option item 3"
        }
    ]
    return (
        <div className='mt-5 container-fluid px-md-5' style={{padding: '0 25px' }}>
            
            <div className="row">
            <h2 style={{paddingBottom: '20px'}}>Sell & Repair
            <div className="line"></div>
            </h2>
                <div className="col-md-4">
                    <div className="main">
                        <div className="form_wrapper">
                            <input type="radio" className="radio" name="radio" id="login" checked />
                            <input type="radio" className="radio" name="radio" id="signup" />
                            <div className="tile d-none">
                                <h3 className="login d-none">Sell</h3>
                                <h3 className="signup d-none">Repair</h3>
                            </div>

                            <label className="tab login_tab" htmlFor="login">
                                Sell
                            </label>

                            <label className="tab signup_tab" htmlFor="signup">
                                Repair
                            </label>
                            <span className="shape"></span>
                            <div className="form_wrap">
                                <div className="form_fild login_form">
                                    {/* <div className="input_group"> */}
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Item" showSearch={true} showTick={false} options={options} onChange={handleChange} />
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Brand" showSearch={true} showTick={false} options={options} onChange={handleChange} />
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Model" showSearch={true} showTick={false} options={options} onChange={handleChange} />

                                    {/* </div> */}




                                    <div type="button" className="btn">Sell Now</div>

                                </div>

                                <div className="form_fild signup_form">
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Item" showSearch={true} showTick={false} options={options} onChange={handleChange} />
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Brand" showSearch={true} showTick={false} options={options} onChange={handleChange} />
                                    <BootstrapSelect className="w-100 pt-3" menuSize={3} placeholder="Select Model" showSearch={true} showTick={false} options={options} onChange={handleChange} />

                                    <input type="submit" className="btn" value="Repair" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-8 px-4 d-flex justify-content-evenly align-items-center" style={{zIndex: '-1'}}>
                    <div className="row desc-both d-flex justify-content-evenly">

                        <div className="col-md-6 pe-md-4">

                            <div className="icon-both">
                                <div className="icon"><i className="bi bi-cart3"></i></div>
                                <span>Sell</span>
                            </div>
                            <div className="desc-sell">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consequatur. Porro magni, quo dignissimos cumque, ex aliquam id esse possimus rerum odio perspiciatis veniam maxime.
                            </div>
                        </div>
                        <div className="col-md-6 ps-md-4">

                            <div className="icon-both">
                                <div className="icon"><i className="bi bi-tools"></i></div>
                                <span>Repair</span>
                            </div>
                            {/* <div className="line"></div> */}
                            <div className="desc-repair">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur. Illum, soluta? Soluta, sunt maxime. Suscipit corrupti corporis animi error aspernatur maxime eius sunt eos?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellReplairTabs


