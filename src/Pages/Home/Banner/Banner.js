import React from 'react';
import bannerPhoto from './../../../Photos/hp-hero-desktop-2021-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <img
                className="d-block w-100 img-fluid"
                src={bannerPhoto}
                alt=""
            />
            <div className="custom-position">

                <h1 className="text-white fw-bolder"> Welcome To<span className="text-warning">Realtor</span></h1>
                <h6 className="text-white"> Let’s find a home that’s perfect for you
                </h6>
            </div>
        </div>

    );
};

export default Banner;