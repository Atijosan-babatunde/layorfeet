import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import banner2 from '../img/banner2.jpg';
import { BaseContainer } from '../web/layouts/Containers';






export function Banner() {
    return (
        <BaseContainer>
            <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </div>


                <div class="page-content pb-0">
                    <div class="container">
                        <div class="page-header page-header-big text-center" style={{ backgroundImage: `url(${banner2})` }}>
                            <h1 class="page-title text-white">About us</h1>
                        </div>
                    </div>
                </div>
            </nav>


            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="about-text text-center mt-3">
                            <h2 class="title text-center mb-2">Who We Are</h2>
                            <p>Layor's Feet is a collection of hand-made Shoes, Sandals, Heels, Slippers nspired by the West Coast lifestyle. Founded in 2020 and based in Nigeria. Lagos, every pair of Layor's Feet are hand-made in our factory. Dedicated to the simple idea that the best products are made with the best materials, Layor's Feet are constructed using the strongest, most supple leathers. </p>


                        </div>
                    </div>
                </div>
            </div>
            <br /><br />



            <div class="container">
            <div class="heading heading-center mb-3">
                <h2 class="title">Product Categories</h2>
            </div>


            <div class="owl-carousel owl-simple" data-toggle="owl"
                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                <div class="banner banner-cat">
                    <Link to="/shoes">
                        <img src="images/tsh.jpg" alt="Layor's Feet Shoes" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Shoes</h3>
                        <h4 class="banner-subtitle">2 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/heels">
                        <img src="images/pants.jpg" alt="FF Pants" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Heels</h3>
                        <h4 class="banner-subtitle">1 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/slippers">
                        <img src="images/slv.jpg" alt="Family First Sleeves" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Slippers</h3>
                        <h4 class="banner-subtitle">3 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/sandals">
                        <img src="images/caps.jpg" alt="Family First Caps" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Sandals</h3>
                        <h4 class="banner-subtitle">4 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>


            </div>



        </div>



        </BaseContainer>
    )
};