import React, { useEffect, useState } from 'react';

import "./Card.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Card = _ => {



    const [user, setUser] = useState([]);
    const userDetails = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        setUser(await response.json());
        // console.log(user);

    }

    useEffect(() => {
        userDetails();
    }, [])


    return (
        <>
            <div className="map">


                {

                    user.map((items) => {
                        return (
                            <>
                                <div className="main-Container">


                                    <div className="container">
                                        <div className="cards">

                                            <p className='logo'>J</p>
                                            <p>{items.username}</p>
                                            <p className="name">{items.name}</p>
                                            <div className="icon-items">
                                                <p className='phone'><FaPhoneAlt className='icon' />{items.phone}</p>
                                                <p className='email'> <FaRegEnvelope className='icon' />{items.email}</p>


                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </>


                        )
                    })
                }
            </div>

        </>



    )
}

export default Card