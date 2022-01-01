import React from 'react';
import Navbar from '../Navbar/Navbar'
import Carousel from "../../Carousel"
import Footer from "../../Footer"

const Header = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Footer/>
            
        </div>
    );
};

export default Header;