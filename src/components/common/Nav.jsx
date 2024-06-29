import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoginSignupImage from "./images/LoginSignupImage.png";
import OTPInput from "otp-input-react";
import { useForm } from "react-hook-form";
import $ from "jquery";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Nav = () => {
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
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total,
            minutes,
            seconds,
        };
    };
    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer("02:00");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setMinutes(deadline.getMinutes() + 1, deadline.getSeconds() + 60);
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
        setCounter(0);
    }, [display]);
    const onClickReset = () => {
        clearTimer(getDeadTime());
        setCounter(30);
    };
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => {
            clearInterval(timer);
        };
    }, [counter]);
    const clearEmail = () => {
        document.getElementById("loginsignup-email").value = "";
    };
    function getCookie() {
        let name = "XSRF-TOKEN=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
        },
        credentials: "include",
        body: JSON.stringify({ mno: phoneNumber }),
    };
    const fetchData = () => {
        fetch("https://take2cash-admin.sumayinfotech.com/api/attempt-login", options)
            .then((response) => {
                return response.json();
            })
            .then((fetchedData) => {
                setData(fetchedData);
                if (fetchedData.status) {
                    setStorePhoneNumber(phoneNumber);
                    localStorage.setItem('phoneNumber', phoneNumber)
                    if (fetchedData.is_reg) {
                        setDisplay("otp");
                        setBtnLoading(false);
                    } else {
                        setDisplay("login");
                        setBtnLoading(false);
                    }
                }
            })
            .catch((error) => console.log(error));
    };
    const fetchRegisterData = () => {
        if (document.getElementById("loginsignup-email").value && nameValue) {
            fetch("https://take2cash-admin.sumayinfotech.com/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
                    },
                    credentials: "include",
                    body: JSON.stringify({ name: nameValue, email: document.getElementById("loginsignup-email").value, mno: storePhoneNumber }),
                })
                .then((response) => {
                    return response.json();
                })
                .then((fetchedData) => {
                    if (fetchedData.status) {
                        setBtnLoading(false);
                        setDisplay("otp");
                    }
                })
                .catch((error) => console.log(error));
        }
    };


    const fetchOTPData = () => {
        fetch("https://take2cash-admin.sumayinfotech.com/api/auth",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
                },
                credentials: "include",
                body: JSON.stringify({ otp: OTP }),
            })
            .then((response) => {
                return response.json();
            })
            .then((fetchedData) => {
                setOTPData(fetchedData);
                if (!fetchedData.is_valid) {
                    setBtnLoading(true);
                    setDisableOTP(false);
                    setBtnLoading(false);
                }
                else if (fetchedData.is_limit) {
                    setBtnLoading(true);
                    setDisableOTP(true);
                    setBtnLoading(false);
                }
                else if (fetchedData.is_valid) {
                    document.getElementById('loginSignupModal-close').click();
                    setToastBackground('#1fbc32');
                    setToastMessage(fetchedData.message); setToast('show');
                    localStorage.setItem('isLoggedIn', true);
                    setBtnLoading(false);
                    localStorage.setItem('userName', fetchedData.user.name);
                    localStorage.setItem('userEmail', fetchedData.user.email);
                }
            })
            .catch((error) => console.log(error));
    };
    const resendOTPData = () => {
        fetch("https://take2cash-admin.sumayinfotech.com/api/attempt-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest",
                'X-XSRF-TOKEN': decodeURIComponent(getCookie()),
            },
            credentials: "include",
            body: JSON.stringify({ mno: phoneNumber }),
        })
            .then((response) => { return response.json(); })
            .then((fetchedData) => { console.log(fetchedData); })
            .catch((error) => console.log(error))
    }
    const logout = () => {
        fetch("https://take2cash-admin.sumayinfotech.com/api/logout", {
            method: 'GET',
            credentials: "include",
        })
            .then((response) => { return response.json(); })
            .then((fetchedData) => { setToastMessage(fetchedData.message); setToast('show'); setToastBackground('#ff432d'); localStorage.setItem('isLoggedIn', "false"); })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        fetch("https://take2cash-admin.sumayinfotech.com/sanctum/csrf-cookie", {
            credentials: "include",
        });
    }, []);
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
                    {(localStorage.getItem('isLoggedIn') !== 'true') && <div
                        className="btn login-btn me-2 hide-mobile"
                        onClick={() => {
                            setDisplay("number");
                            setPhoneNumber("");
                            clearEmail();
                        }}
                        id="nav-login-btn"
                        data-bs-toggle="modal" data-bs-target="#loginSignupModal"
                    >
                        Login
                    </div>}
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

            <div
                className="modal fade"
                id="loginSignupModal"
                tabIndex="-1"
                aria-labelledby="loginSignupModalLabel"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ border: "0px" }}>
                        <div
                            className="modal-header"
                            style={{ backgroundColor: "#2f44ff" }}
                        >
                            <div className="login-signup-header">
                                <img src={LoginSignupImage} alt="" />
                                <div className="login-signup-heading-text align-self-center">
                                    Login / Signup
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                style={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "20px",
                                    backgroundColor: "#fff",
                                    fontSize: "10px",
                                    width: "15px",
                                    height: "15px",
                                    padding: "6px",
                                    borderRadius: "50%",
                                }}
                                id='loginSignupModal-close'
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form className={display === "number" ? "" : "d-none"}>
                            <div className="modal-body login-signup-body">
                                <div className="login-signup-text-input">
                                    <div className="login-signup-input">
                                        <label htmlFor="loginsignup" className="form-label">
                                            Enter Mobile No.
                                        </label>
                                        <PhoneInput
                                            inputClass="mobile-input"
                                            buttonClass="mobile-input-flags"
                                            // onlyCountries={['in', 'fr']}
                                            country={"in"}
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                        />
                                        <div className="terms-and-conditions-link d-flex gap-2 mt-5">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                onClick={() => {
                                                    setTermsAndConditionCheckbox(
                                                        !termsAndConditionCheckbox
                                                    );
                                                }}
                                                style={{ border: "1px solid #2f44ff" }}
                                            />
                                            <div className="align-items-center">
                                                {" "}
                                                I agree to the{" "}
                                                <Link to="/policies" target="_blank">
                                                    Terms and Conditions
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "rgb(246,237,255)",
                                        color: "#2f44ff",
                                    }}
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>

                                {btnLoading ?
                                    <button class="btn btn-primary" type="button" disabled> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button>
                                    :
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOTP("");
                                            setDisableOTP(false);
                                            setOTPData(false);
                                            // setMno(phoneNumber);
                                            // console.log(mno + "-" + phoneNumber);
                                            fetchData();
                                            setBtnLoading(true);
                                        }}
                                        className="btn"
                                        style={{ backgroundColor: "#2f44ff", color: "#fff" }}
                                        disabled={termsAndConditionCheckbox ? phoneNumber.length > 11 ? "" : "true" : "true"}>
                                        Send OTP
                                    </button>
                                }
                            </div>
                        </form>
                        <div className={display === "otp" ? "" : "d-none"}>
                            <div className="modal-body login-signup-body">
                                <div className="login-signup-text-input">
                                    <div className="login-signup-input">
                                        <label
                                            htmlFor="loginsignup"
                                            className="form-label d-flex justify-content-center pb-2"
                                        >
                                            Enter OTP - {timer}
                                        </label>
                                        <OTPInput
                                            value={OTP}
                                            onChange={setOTP}
                                            autoFocus
                                            OTPLength={6}
                                            otpType="number"
                                            disabled={disableOTP}
                                            placeholder={[" ", " ", " ", " ", " ", " "]}
                                            className="otp-input-box"
                                        />
                                        {OTPData.message && (
                                            <div
                                                className="text-center"
                                                style={{ color: "red", marginLeft: "10px" }}>
                                                <i
                                                    className="bi bi-info-circle"
                                                    style={{ fontSize: "14px" }}
                                                ></i>
                                                {OTPData.message}
                                            </div>
                                        )}
                                        <div className="resend-otp-box w-100 text-center pt-3">
                                            <button
                                                id="resend-btn"
                                                className="resend-otp-text"
                                                onClick={() => {
                                                    onClickReset();
                                                    setOTP("");
                                                    setOTPData(false);
                                                    setDisableOTP(false);
                                                    resendOTPData();
                                                }}
                                                disabled={counter === 0 ? false : true}
                                            >
                                                Resend OTP{" "}
                                                <span className={counter === 0 ? "d-none" : ""}>
                                                    in {counter} seconds
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "rgb(246,237,255)",
                                        color: "#2f44ff",
                                    }}
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                {btnLoading ?
                                    <button class="btn btn-primary" type="button" disabled> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button>
                                    :
                                    <button
                                        onClick={() => {
                                            setNameValue("");
                                            setEmailValue("");
                                            fetchOTPData();
                                            setBtnLoading(true);
                                        }}
                                        disabled={
                                            $("div.otp-input-box > input").last().val() ? OTPData.is_limit ? "true" : '' : "true"
                                        }
                                        type="button"
                                        className="btn"
                                        style={{ backgroundColor: "#2f44ff", color: "#fff" }}
                                    >
                                        Confirm OTP
                                    </button>
                                }
                            </div>
                            {/* disabled={OTP >= 1? OTP < 999999 ? '': 'true': 'true'} */}
                        </div>
                        <form
                            className={display === "login" ? "" : "d-none"}
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert(document.getElementById("loginsignup-email").value);
                                // handleSubmit();
                                // console.log(formState);
                                // handleSubmit();
                            }}>
                            <div className="modal-body login-signup-body">
                                <div className="login-signup-text-input">
                                    <div className="login-signup-input">
                                        <div className="enter-name">
                                            <input
                                                onChange={(event) => {
                                                    setNameValue(event.target.value);
                                                }}
                                                value={nameValue}
                                                type="text"
                                                className="form-control"
                                                id="loginsignup"
                                                required
                                            />
                                            <span className="login-inputs-spans">Name</span>
                                        </div>
                                        <div className="enter-email">
                                            <input
                                                required
                                                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                                                type="text"
                                                className="form-control"
                                                id="loginsignup-email"
                                            />
                                            <span className="login-inputs-spans">Email</span>
                                            {/* {errors.email && <div style={{ color: "red", padding: "0 15px", marginBottom: "-20px", }}><i class="bi bi-info-circle" style={{ fontSize: '14px' }}></i> {errors.email?.message}</div>} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "rgb(246,237,255)",
                                        color: "#2f44ff",
                                    }}
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>

                                {btnLoading ?
                                    <button class="btn btn-primary" type="button" disabled> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button>
                                    :
                                    <button
                                        type="submit"
                                        className="btn"
                                        style={{ backgroundColor: "#2f44ff", color: "#fff" }}
                                        onClick={() => {
                                            // if (!errors.email) {
                                            // fetchRegisterData();
                                            // setBtnLoading(true);
                                            // }
                                            // else { setBtnLoading(false); }
                                        }}>
                                        Send OTP
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
