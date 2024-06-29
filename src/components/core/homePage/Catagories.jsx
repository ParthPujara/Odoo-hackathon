import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { RiArmchairLine } from "react-icons/ri";
import { GiWoodenChair } from "react-icons/gi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { Link } from 'react-router-dom'

const Catagories = () => {

    const [cat, setCat] = useState({});

    const getCategory = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/getCat", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if(result.status === true){
                    console.log(result.data)
                    setCat(result.data)
                }
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        console.log("kjiuu")
        getCategory()
    }, []);

    return (
        <div>
            <div className="container-fluid categories px-md-5" style={{ padding: '0 30px' }}>
                <h2 style={{ paddingTop: '80px' }}>Device you wish to sell
                    <div className="line"></div>
                </h2>
                <div className="mt-5 d-flex flex-wrap justify-content-around" style={{ borderRadius: '5px' }}>

                    {cat.length && cat.map((item, key) => (
                        <Link key={key} to={`/${item.name}`}>
                            <div className="card" style={{ border: '0', padding: '15px 5px', minHeight: '200px' }} onClick={() => { localStorage.setItem('deviceId', 1) }}>
                                <img className="categories-icon mx-auto pt-3" style={{ marginBottom: '-10px' }}
                                    src={`${import.meta.env.VITE_API_DOMAIN}${item.image}`}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center" style={{ margin: '10px 0' }}>{item.name}</h5>
                                </div>
                            </div>
                        </Link>))}
                </div>
            </div>
        </div>
    )
}

export default Catagories
