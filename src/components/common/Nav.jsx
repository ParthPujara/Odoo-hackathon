import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginSignupImage from "C:/Users/Nihal/Desktop/faq (1).png";
// import OTPInput from "otp-input-react";
import { useForm } from "react-hook-form";
import $ from "jquery";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Nav = () => {

    // const options = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         "X-Requested-With": "XMLHttpRequest",
    //         'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
    //     },
    //     credentials: "include",
    //     body: JSON.stringify({ mno: phoneNumber }),
    // };
    // const fetchData = () => {
    //     fetch("https://take2cash-admin.sumayinfotech.com/api/attempt-login", options)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((fetchedData) => {
    //             setData(fetchedData);
    //             if (fetchedData.status) {
    //                 setStorePhoneNumber(phoneNumber);
    //                 localStorage.setItem('phoneNumber', phoneNumber)
    //                 if (fetchedData.is_reg) {
    //                     setDisplay("otp");
    //                     setBtnLoading(false);
    //                 } else {
    //                     setDisplay("login");
    //                     setBtnLoading(false);
    //                 }
    //             }
    //         })
    //         .catch((error) => console.log(error));
    // };
    // const fetchRegisterData = () => {
    //     if (document.getElementById("loginsignup-email").value && nameValue) {
    //         fetch("https://take2cash-admin.sumayinfotech.com/api/register",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Accept: "application/json",
    //                     "X-Requested-With": "XMLHttpRequest",
    //                     'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
    //                 },
    //                 credentials: "include",
    //                 body: JSON.stringify({ name: nameValue, email: document.getElementById("loginsignup-email").value, mno: storePhoneNumber }),
    //             })
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((fetchedData) => {
    //                 if (fetchedData.status) {
    //                     setBtnLoading(false);
    //                     setDisplay("otp");
    //                 }
    //             })
    //             .catch((error) => console.log(error));
    //     }
    // };


    // const fetchOTPData = () => {
    //     fetch("https://take2cash-admin.sumayinfotech.com/api/auth",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 "X-Requested-With": "XMLHttpRequest",
    //                 'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({ otp: OTP }),
    //         })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((fetchedData) => {
    //             setOTPData(fetchedData);
    //             if (!fetchedData.is_valid) {
    //                 setBtnLoading(true);
    //                 setDisableOTP(false);
    //                 setBtnLoading(false);
    //             }
    //             else if (fetchedData.is_limit) {
    //                 setBtnLoading(true);
    //                 setDisableOTP(true);
    //                 setBtnLoading(false);
    //             }
    //             else if (fetchedData.is_valid) {
    //                 document.getElementById('loginSignupModal-close').click();
    //                 setToastBackground('#1fbc32');
    //                 setToastMessage(fetchedData.message); setToast('show');
    //                 localStorage.setItem('isLoggedIn', true);
    //                 setBtnLoading(false);
    //                 localStorage.setItem('userName', fetchedData.user.name);
    //                 localStorage.setItem('userEmail', fetchedData.user.email);
    //             }
    //         })
    //         .catch((error) => console.log(error));
    // };
    // const resendOTPData = () => {
    //     fetch("https://take2cash-admin.sumayinfotech.com/api/attempt-login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "X-Requested-With": "XMLHttpRequest",
    //             'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
    //         },
    //         credentials: "include",
    //         body: JSON.stringify({ mno: phoneNumber }),
    //     })
    //         .then((response) => { return response.json(); })
    //         .then((fetchedData) => { console.log(fetchedData); })
    //         .catch((error) => console.log(error))
    // }
    // const logout = () => {
    //     fetch("https://take2cash-admin.sumayinfotech.com/api/logout", {
    //         method: 'GET',
    //         credentials: "include",
    //     })
    //         .then((response) => { return response.json(); })
    //         .then((fetchedData) => { setToastMessage(fetchedData.message); setToast('show'); setToastBackground('#ff432d'); localStorage.setItem('isLoggedIn', "false"); })
    //         .catch((error) => console.log(error))
    // }
    // useEffect(() => {
    //     fetch("https://take2cash-admin.sumayinfotech.com/sanctum/csrf-cookie", {
    //         credentials: "include",
    //     });
    // }, []);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);
    const [OTPData, setOTPData] = useState([]);
    const [termsAndConditionCheckbox, setTermsAndConditionCheckbox] =
        useState(false);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [mno, setMno] = useState();
    const Ref = useRef(null);
    const [display, setDisplay] = useState("number");
    const [counter, setCounter] = useState(30);
    const [timer, setTimer] = useState("00:00");
    const [OTP, setOTP] = useState("");
    const [storePhoneNumber, setStorePhoneNumber] = useState();
    const [disableOTP, setDisableOTP] = useState(false);
    // const [loginBtn, setLoginBtn] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toast, setToast] = useState('');
    const [toastBackground, setToastBackground] = useState('#fff');
    const [btnLoading, setBtnLoading] = useState(false);
    function closeNav() {
        var cb = document.getElementById("click");
        cb.checked = false;
    }
    return (
        <>
            <div className="heading fixed-top">
                <nav style={{ boxShadow: "0 3px 10px aliceblue" }}>
                    <Link to="/">
                        <div className="logo">
                            <i className="bi bi-check2-circle"></i> LOGO
                        </div>
                    </Link>
                    {(localStorage.getItem('isLoggedIn') !== 'true') && <div
                        className="btn login-btn me-3 ms-auto hide-pc"
                        onClick={() => {
                            setDisplay("number");
                            setPhoneNumber("");
                            clearEmail();
                        }}
                        data-bs-toggle="modal" data-bs-target="#loginSignupModal"
                        id="nav-login-btn"
                    >
                        Login
                    </div>}
                    {(localStorage.getItem('isLoggedIn') === 'true') && <div className="dropdown user-btn hide-pc">
                        <button className="btn-profile" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/orders" style={{ textDecoration: 'none', color: 'gray', cursor: 'pointer' }}><li>Orders</li></Link>
                            <li style={{ cursor: 'pointer', color: 'gray' }}><span className="dropdown-item" onClick={logout}>Log Out</span></li>
                        </ul>
                    </div>}
                    <input type="checkbox" id="click" />
                    <label htmlFor="click" className="menu-btn">
                        <i className="bi bi-list"></i>
                    </label>
                    <div className="navigation" id="navigation">
                        <ul className="m-0">
                            <li>
                                <Link to="/" onClick={closeNav}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={closeNav}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/corporate-enquiry" onClick={closeNav}>
                                    Corporate Enquiry
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" onClick={closeNav}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/become-our-partner" onClick={closeNav}>
                                    Become Our Partner
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {(localStorage.getItem('isLoggedIn') !== 'true') && <NavLink
                        className="btn login-btn me-2 hide-mobile"
                        to="/login"
                        id="nav-login-btn"
                    >
                        Login
                    </NavLink>}
                    {(localStorage.getItem('isLoggedIn') === 'true') && <div className="dropdown user-btn hide-mobile">
                        <button className="btn-profile" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/orders" style={{ textDecoration: 'none', color: 'gray', cursor: 'pointer' }}><li>Orders</li></Link>
                            <li style={{ cursor: 'pointer' }}><span className="dropdown-item" onClick={logout}>Log Out</span></li>
                        </ul>
                    </div>}
                </nav>
            </div>

            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: '9999999999999 !important' }}>
                <div id="liveToast" className={`toast ${toast}`} role="alert" aria-live="assertive" aria-atomic="true" delay={5000} autohide={true}>
                    <div className="toast-header" style={{ background: `${toastBackground}`, color: '#fff' }}>
                        <i class="bi bi-check2-circle" style={{ fontSize: '20px' }}></i>
                        <span className="me-auto ms-2">Bootstrap</span>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" onClick={() => { setToast(''); }} aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        {toastMessage}
                    </div>
                </div>
            </div>

            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header" style={{ color: '#fff' }}>
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>


        </>
    );
};

export default Nav;
