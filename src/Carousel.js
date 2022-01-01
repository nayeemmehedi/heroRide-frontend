import React from 'react';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {

    return (

        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-sm-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active img-car">
                        <img className="image_img"

                            src= "https://pandomoto.com/app/uploads/2020/01/choosing-proper-motorcycle-gear.jpeg" class="d-block w-100" alt="Bricks" />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--primary">
                            <div className="image_title">BIKE RIDER</div>
                            <p className="image_description">"I A'm A Full-Stack Web Developer "</p>







                        </div>


                    </div>
                    <div class="carousel-item img-car">
                        <img className="image_img"
                            src="https://img.freepik.com/free-photo/modern-man-driving-car_23-2148514905.jpg?size=626&ext=jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--blur">
                        <div className="image_title">CAR RIDER</div>

                            <p className="image_description">"I A'm A Full-Stack  Web Developer "</p>


                            

                        </div>

                    </div>
                   
                    
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );

};

export default Carousel;